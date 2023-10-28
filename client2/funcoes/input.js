class Input {

    constructor(type, value, parent) {
        const input = document.createElement("input")
        input.type = type
        input.placeholder = value
        parent.appendChild(input)
    }
}