class Div {

    constructor(id="") {
        this.element = document.createElement("div");
        if (id==="") {} else {this.element.id = id};
    };
    
    addElement(valor) {
        this.element.appendChild(valor);
    };
};