class Tr {

    constructor(id="", classe="") {
        this.element = document.createElement("tr")
        if (classe==="") {} else (this.element.className = classe)
        if (id==="") {} else {this.element.id = id}
    }
} 