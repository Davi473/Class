class Div {

    constructor(id) {
       
        this.div = document.createElement("div")
        this.div.id = id
    }
    addNaDiv(parent) {
        this.div.appendChild(parent)
    }
}