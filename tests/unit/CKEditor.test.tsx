import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { render } from '@testing-library/react';
import {
	findByEditorName,
	findByClassicEditorContent,
	findByClassicEditorEditable,
	findByInlineEditorContent,
	findByInlineEditorEditable,
	findClassicEditor,
	findInlineEditor,
	queryClassicEditor
} from './utils';
import { CKEditor, CKEditorEventHandler } from '../../src';

function init() {
	describe( 'CKEditor', () => {
		/**
		 * Ensures that classic editor is initialized in writable mode by default.
		 */
		it( 'initializes classic editor', async () => {
			render( <CKEditor /> );
			expect( await findByClassicEditorEditable( true ) ).toBeVisible();
		} );

		/**
		 * Ensures that initial data is set in classic editor.
		 */
		it( 'initializes classic editor with initial data', async () => {
			render( <CKEditor initData="Hello world!" /> );
			expect(
				await findByClassicEditorContent( 'Hello world!' )
			).toBeVisible();
		} );

		/**
		 * Ensures that initial data is set - JSX.
		 */
		it( 'initializes classic editor with initial data as JSX', async () => {
			render( <CKEditor initData={<p>Hello world!</p>} /> );
			expect(
				await findByClassicEditorContent( 'Hello world!' )
			).toBeVisible();
		} );

		/**
		 * Ensures that inline editor is initialized in writable mode.
		 */
		it( 'initializes inline editor', async () => {
			render( <CKEditor type="inline" /> );
			expect( await findByInlineEditorEditable( true ) ).toBeVisible();
		} );

		/**
		 * Ensures that initial data is set in inline editor.
		 */
		it( 'initializes inline editor with initial data', async () => {
			render( <CKEditor type="inline" initData="Hello world!" /> );
			expect(
				await findByInlineEditorContent( 'Hello world!' )
			).toBeVisible();
		} );

		/**
		 * Ensures that initial data is set - JSX.
		 */
		it( 'initializes inline editor with initial data as JSX', async () => {
			render( <CKEditor type="inline" initData={<p>Hello world!</p>} /> );
			expect(
				await findByInlineEditorContent( 'Hello world!' )
			).toBeVisible();
		} );

		/**
		 * Ensures that classic editor is initialized as read-only.
		 */
		it( 'initializes classic editor as read-only', async () => {
			render( <CKEditor readOnly={true} /> );
			expect( await findByClassicEditorEditable( false ) ).toBeVisible();
		} );

		/**
		 * Ensures that inline editor is initialized as read-only.
		 */
		it( 'initializes inline editor as read-only', async () => {
			render( <CKEditor type="inline" readOnly={true} /> );
			expect( await findByInlineEditorEditable( false ) ).toBeVisible();
		} );

		/**
		 * Ensures that `readOnly` prop has precedence over `config.readOnly`.
		 */
		it( 'overrides `readOnly` in config with prop value', async () => {
			render( <CKEditor config={{ readOnly: true }} readOnly={false} /> );
			expect( await findByClassicEditorEditable( true ) ).toBeVisible();
		} );

		/**
		 * Ensures that editor is initialized with custom name.
		 */
		it( 'sets editor name', async () => {
			render( <CKEditor initData="Hello world!" name="my-editor" /> );
			expect( await findByEditorName( 'my-editor' ) ).toBeVisible();
			expect(
				( window as any ).CKEDITOR.instances[ 'my-editor' ]
			).toBeDefined();
		} );

		/**
		 * Ensures that styles are applied to classic editor's container.
		 */
		it( 'sets custom styles for classic editor', async () => {
			const style = { border: '1px solid red' };
			render( <CKEditor style={style} /> );
			const el = await findClassicEditor();
			expect( el.style.border ).toEqual( style.border );
		} );

		/**
		 * Ensures that styles are applied to inline editor's container.
		 */
		it( 'sets custom styles for inline editor', async () => {
			const style = { border: '1px solid red' };
			render( <CKEditor style={style} type="inline" /> );
			const el = await findInlineEditor();
			expect( el.style.border ).toEqual( style.border );
		} );

		/**
		 * Ensures that read-only mode can be toggled after initialization.
		 */
		it( 'sets editor as read-only after init', async () => {
			const { rerender } = render( <CKEditor initData="Hello world!" /> );
			expect( await findByClassicEditorEditable( true ) ).toBeVisible();
			rerender( <CKEditor initData="Hello world!" readOnly={true} /> );
			expect( await findByClassicEditorEditable( false ) ).toBeVisible();
			rerender( <CKEditor initData="Hello world!" readOnly={false} /> );
			expect( await findByClassicEditorEditable( true ) ).toBeVisible();
		} );

		/**
		 * Ensures that editor's style can be changed after initialization.
		 */
		it( 'sets custom styles for editor after init', async () => {
			const style1 = { border: '1px solid red' };
			const { rerender } = render( <CKEditor style={style1} /> );
			const el1 = await findClassicEditor();
			expect( el1.style.border ).toEqual( style1.border );
			const style2 = { border: '1px solid green' };
			rerender( <CKEditor style={style2} /> );
			const el2 = await findClassicEditor();
			expect( el2.style.border ).toEqual( style2.border );
		} );

		/**
		 * Ensures that initial data remains "initial". It should be set once.
		 */
		it( 'does not change data after init', async () => {
			const { rerender } = render( <CKEditor initData="Hello world!" /> );
			expect(
				await findByClassicEditorContent( 'Hello world!' )
			).toBeVisible();
			rerender( <CKEditor initData="Changed data!" /> );
			expect(
				await findByClassicEditorContent( 'Hello world!' )
			).toBeVisible();
		} );

		/**
		 * Ensures that new instance of editor is not created after passing new value of `editorUrl`.
		 */
		it( 'does not re-initialize editor on `editorUrl` change', async () => {
			const { rerender } = render( <CKEditor initData="Hello world!" /> );
			expect( queryClassicEditor() ).toBeNull();
			expect(
				await findByClassicEditorContent( 'Hello world!' )
			).toBeVisible();
			rerender( <CKEditor editorUrl="https://some.url.org" /> );
			expect( queryClassicEditor() ).not.toBeNull();
		} );

		/**
		 * Ensures that new instance of editor is not created after passing new value of event handler.
		 */
		it( 'does not re-initialize editor on `onInstanceReady` change', async () => {
			const onInstanceReady = jasmine.createSpy( 'onInstanceReady' );
			const onInstanceReady2 = jasmine.createSpy( 'onInstanceReady2' );
			const { rerender } = render(
				<CKEditor
					initData="Hello world!"
					onInstanceReady={onInstanceReady}
				/>
			);
			expect( queryClassicEditor() ).toBeNull();
			expect(
				await findByClassicEditorContent( 'Hello world!' )
			).toBeVisible();
			rerender( <CKEditor onInstanceReady={onInstanceReady2} /> );
			expect( queryClassicEditor() ).not.toBeNull();
		} );

		/**
		 * Ensures that new instance of editor is not created after passing new value of `debug`.
		 */
		it( 'does not re-initialize editor on `debug` change', async () => {
			const { rerender } = render(
				<CKEditor initData="Hello world!" debug={false} />
			);
			expect( queryClassicEditor() ).toBeNull();
			expect(
				await findByClassicEditorContent( 'Hello world!' )
			).toBeVisible();
			rerender( <CKEditor debug={true} /> );
			expect( queryClassicEditor() ).not.toBeNull();
		} );

		/**
		 * Ensures that new instance of editor is not created after passing new value of `type`.
		 */
		it( 'does not re-initialize editor on `type` change', async () => {
			const { rerender } = render( <CKEditor initData="Hello world!" /> );
			expect( queryClassicEditor() ).toBeNull();
			expect(
				await findByClassicEditorContent( 'Hello world!' )
			).toBeVisible();
			rerender( <CKEditor type="inline" /> );
			expect( queryClassicEditor() ).not.toBeNull();
		} );

		/**
		 * Ensures that new instance of editor is not created after passing new `config`.
		 */
		it( 'does not re-initialize editor on `config` change', async () => {
			const { rerender } = render( <CKEditor initData="Hello world!" /> );
			expect( queryClassicEditor() ).toBeNull();
			expect(
				await findByClassicEditorContent( 'Hello world!' )
			).toBeVisible();
			rerender( <CKEditor config={{ skin: 'myskin' }} /> );
			expect( queryClassicEditor() ).not.toBeNull();
		} );

		/**
		 * Ensures that `namespace` event handler `onBeforeLoad` is invoked.
		 */
		it( 'invokes `onBeforeLoad` callback', async () => {
			const onBeforeLoad = jasmine.createSpy( 'onBeforeLoad' );
			render( <CKEditor onBeforeLoad={onBeforeLoad} /> );
			expect( await findClassicEditor() ).toBeVisible();
			expect( onBeforeLoad ).toHaveBeenCalledTimes( 1 );
		} );

		/**
		 * Ensures that default `editor` event handlers are invoked.
		 */
		it( 'invokes editor handlers for default events', async () => {
			const onDestroy = jasmine.createSpy( 'onDestroy' );
			const onLoaded = jasmine.createSpy( 'onLoaded' );
			const onInstanceReady = jasmine.createSpy( 'onInstanceReady' );
			const { unmount } = render(
				<CKEditor
					initData="Hello world!"
					onDestroy={onDestroy}
					onInstanceReady={onInstanceReady}
					onLoaded={onLoaded}
				/>
			);
			expect( await findByClassicEditorEditable( true ) ).toBeVisible();
			unmount();
			expect( queryClassicEditor() ).toBeNull();
			expect( onLoaded ).toHaveBeenCalledTimes( 1 );
			expect( onInstanceReady ).toHaveBeenCalledTimes( 1 );
			expect( onDestroy ).toHaveBeenCalledTimes( 1 );
		} );

		/**
		 * Ensures that custom `editor` event handlers are invoked.
		 */
		it( 'invokes editor handlers for custom events', async () => {
			const windw = window as any;
			const onCustomEvent = jasmine.createSpy( 'onCustomEvent' );
			render(
				<CKEditor<{
					onCustomEvent: CKEditorEventHandler<'customEvent'>;
				}>
					name="test"
					onCustomEvent={onCustomEvent}
				/>
			);
			expect( await findClassicEditor() ).toBeVisible();
			windw.CKEDITOR.instances.test.fire( 'customEvent' );
			// expect( await findClassicEditor() ).toBeVisible();
			expect( onCustomEvent ).toHaveBeenCalledTimes( 1 );
		} );

		/**
		 * Renders correctly to string.
		 */
		it( 'renders as string', async () => {
			const result = ReactDOMServer.renderToString( <CKEditor /> );
			expect( result ).toEqual(
				'<div style="display:none;visibility:hidden" data-reactroot=""></div>'
			);
		} );
	} );
}

export default init;
