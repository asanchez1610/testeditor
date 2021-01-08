import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './QuillTextEditor-styles.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<quill-text-editor></quill-text-editor>
```

##styling-doc

@customElement quill-text-editor
*/
export class QuillTextEditor extends LitElement {
  static get is() {
    return 'quill-text-editor';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();


  }

  firstUpdated() {
    this.shadowRoot.querySelector('#sampleeditor').setAttribute('contenteditable', 'true');

  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('quill-text-editor-shared-styles')
    ];
  }

  test(command, value) {
    this.shadowRoot.ownerDocument.execCommand(command)
    //this.shadowRoot.execCommand(command, false, value);
    //console.log(this.shadowRoot.getSelection())
  }

  // Define a template
  render() {
    return html`
      <slot></slot>
      <button @click="${() => this.test('bold')}" >Test</button>
      <div class="editor" id="sampleeditor">
      </div>
    `;
  }
}
