class Table {

    constructor(parent, id="") {
        this.element = document.createElement("table")
        this.element.id = id
        parent.appendChild(this.element)
    }
}