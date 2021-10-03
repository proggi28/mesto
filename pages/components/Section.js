export class Section {
    constructor({ data, renderer }, containerSelector) {
        this._rendereritems = data;
        this._renderer = renderer;
        this._container = containerSelector;
    }
    renderItems() {
        this._rendereritems.forEach(item => this._renderer(item));
    }
    addItem(element) {
        this._container.prepend(element);
    }
}