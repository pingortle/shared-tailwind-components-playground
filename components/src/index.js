/* global customElements, HTMLParagraphElement, HTMLElement */

import './tailwind.css'
import stylesheetText from 'bundle-text:./tailwind.css'
import styledTextTemplate from 'bundle-text:./styled-text.html'

class Paragraph extends HTMLParagraphElement {
  connectedCallback () {
    this.className = 'lape-text-blue500'
  }
}

class StyledText extends HTMLElement {
  static template () {
    if (!this._template) {
      this._template = document.createElement('template')
      this._template.innerHTML = styledTextTemplate
    }

    return this._template
  }

  get template () {
    console.log(this.constructor, this.constructor.template())
    return this.constructor.template()
  }

  get shadowRoot () {
    this._shadowRoot ||= this.attachShadow({ mode: 'open' })
    return this._shadowRoot
  }

  connectedCallback () {
    const styleElement = document.createElement('style')
    styleElement.innerHTML = stylesheetText

    this.shadowRoot.appendChild(styleElement)
    this.shadowRoot.appendChild(
      this.template.content.cloneNode(true)
    )
  }
}

customElements.define('lape-paragraph', Paragraph, { extends: 'p' })
customElements.define('lape-styled-text', StyledText)
