import Component from './component.js';

export default class PhoneViewer extends Component {
  constructor({ element, onBack }) {
    super({ element });
    this.onBack = onBack;

    this.on('click', '[data-element="back-button"]', () => {
      this.emit('back');
    });
    this.on('click', '[data-element="small-preview"]', event => {
      const bigPreview = this._element.querySelector(
        '[data-element="big-preview"]'
      );
      bigPreview.src = event.target.src;
    });
  }

  show(phoneDetails) {
    this._phoneDetails = phoneDetails;
    this._render();
    super.show();
  }

  _render() {
    this._element.innerHTML = `
    <img
    data-element="big-preview"
    class="phone" 
    src="${this._phoneDetails.images[0]}">

    <button data-element="back-button">Back</button>
    <button>Add to basket</button>


    <h1>${this._phoneDetails.name}</h1>

    <p>${this._phoneDetails.description}</p>

    <ul class="phone-thumbs">
      ${this._phoneDetails.images
        .map(
          imageUrl => `
      <li>
        <img
        data-element="small-preview"
        src="${imageUrl}">
      </li>
      `
        )
        .join('')}
    </ul>`;
  }
}
