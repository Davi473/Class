class Input {

    constructor(type, parent, value) {
        this.input = document.createElement("input");
        this.input.type = type;
        this.input.placeholder = value;
        this.input.id = value;
        parent.appendChild(this.input);
    };
};