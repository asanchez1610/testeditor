import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../quill-text-editor.js';

suite('QuillTextEditor', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<quill-text-editor></quill-text-editor>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});
