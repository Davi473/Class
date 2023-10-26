class Celulas {

    constructor(type, parent, valor) {
        this.element = document.createElement(type);
        this.element.innerText = valor
        parent.appendChild(this.element)
    }

}