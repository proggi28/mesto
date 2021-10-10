export class Section {
    constructor({ data, renderer }, containerSelector) {
        this._cards = data;
        this._renderer = renderer;
        this._container = containerSelector;
    }
    renderItems() {
        this._cards.forEach(item => this._renderer(item));
    }
    addItem(element) {
        this._container.prepend(element);
    }
}