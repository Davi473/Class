class Cabecalho {

    constructor() {
        this.init()
    }

    init() {
        const div = new Div("adicionar")
        const table = new Table(div.element)
        const tr = new Tr("valores1", table.element)
        new Input("text", "Nome", tr.element)
        new Input("text", "Email", tr.element)
        new Input("text", "Telefone", tr.element)
        const tr2 = new Tr("valores2", div.element)
        new Stats("", tr2.element)
        new ButtoAdicionar(tr2.element)
        const body = document.getElementById("comeco");
        body.appendChild(div.element)
    }
}