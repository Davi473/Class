class Input {

    constructor(type, value, parent, id="") {
        const input = document.createElement("input")
        input.type = type
        input.placeholder = value
        if (id==="") {} else {input.id = id}
        parent.appendChild(input)
    }
}