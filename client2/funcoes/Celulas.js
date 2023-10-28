class Celulas {

    constructor(type, parent, valor) {
        this.element = document.createElement(type);
        this.element.innexText = valor
        parent.appendChild(this.element)
    }

}