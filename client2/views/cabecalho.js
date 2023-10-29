class Cabecalho {

    constructor() {
        this.init()
    }

    init() {
        const div = new Div("adicionar")
        const table = new Table(div.element)
        const tr = new Tr("valores1", table.element)
        new Input("text", "Nome", tr.element, "Nome")
        new Input("text", "Email", tr.element, "Email")
        new Input("text", "Telefone", tr.element, "Telefone")
        const tr2 = new Tr("valores2", div.element)
        new Stats("", tr2.element, "stats")
        new ButtonAdicionar(tr2.element)
        const body = document.getElementById("comeco");
        body.appendChild(div.element)
    }
}