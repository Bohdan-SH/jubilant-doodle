import Component from './component.js';

export default class Filter extends Component {
  constructor({ element }) {
    super({element});

    this._render();

    this.on('change', '[data-element="order-field"]', (event) => {
      this.emit('order-change');
    });

    this.on('input', '[data-element="query-field"]', (event) => {
      this.emit('query-change');
    });
  }

  _render() {
    this._element.innerHTML = ` 
    <p>
    Search:
    <input data-element="query-field">
    </p>

    <p>
      Sort by:
      <select data-element="order-field">
        <option value="name">Alphabetical</option>
        <option value="age">Newest</option>
      </select>
    </p>`;
  }
}
