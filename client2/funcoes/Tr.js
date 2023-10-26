class Tr {

    constructor(id="") {
        this.element = documento.createElement("tr")
        if (id==="") {} else {this.element.id = id}        
    }

    addElementos(valor) {
        this.element.appendChild(valor)
    }
}