class Tr {

    constructor(id="", parent) {
        this.element = document.createElement("tr")
        if (id==="") {} else {this.element.id = id}       
        parent.appendChild(this.element) 
    }
}