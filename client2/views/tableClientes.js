class tableClientes {
    constructor() {
        this.init()
    }

    async init() {
        const clientesValores = new Web("http://localhost:3000")
        this.clientesValores = await clientesValores.get("/valoresDosClientes")
        this.cabecalho()
    }

    clientes() {
    }

    cabecalho() {
        const div = new Div("cabecalho")
        const table = new Table(div.element)
        const tr = new Tr("", table.element)
        new Celulas("th", tr.element, "Nome", "tabela")
        new Celulas("th", tr.element, "Email", "tabela")
        new Celulas("th", tr.element, "Telefone", "tabela")
        new Celulas("th", tr.element, "Stats", "tabela")
        new Celulas("th", tr.element, "Ação", "tabela")

        // clientes 
        let valorButton = 0
        let valorTr = 0
        for (const clients of this.clientesValores) {
            const trClientes = new Tr(valorTr, table.element)
            valorTr += 1
            new Celulas("td", trClientes.element, clients.cliente, "tabela")
            new Celulas("td", trClientes.element, clients.email, "tabela")
            new Celulas("td", trClientes.element, clients.telefone, "tabela")
            new Stats(clients.stats, trClientes.element, "tabela")
            new ButtonExcluir(trClientes.element, valorButton)
            valorButton += 1;

        }
        const body = document.getElementById("comeco");
        body.appendChild(div.element)
        
    }
}