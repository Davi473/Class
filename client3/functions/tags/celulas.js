class Celulas {

    constructor(type, value, parent) {
        const element = document.createElement(type)
        element.innerText = value
        parent.appendChild(element)
    }
}