class Celulas {

    constructor(type, parent, valor, id="") {
        const element = document.createElement(type);
        element.innerText = valor
        if (id==="") {} else {element.id = id}
        parent.appendChild(element)
    }

}