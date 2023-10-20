class Celulas {

    constructor(type, valor, parent, id="") {
        this.element = document.createElement(type)
        this.element.innerText = valor
        if (id==="") {} else {this.element.id = id}
        parent.appendChild(this.element)
    }
}