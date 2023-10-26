class tableClientes {
    constructor() {
        this.init()
    }

    init() {
        const div = new Div("cabecalho")
        constnew Valores("http://localhost:2999/valoresDosClientes").get(div.element)
        div.element.appendChild()
        const body = document.getElementById("comeco");
        body.appendChild(div.element)
    }
}