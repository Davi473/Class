class tableClientes {
    constructor() {
        this.init()
    }

    async init() {
        this.web = new Web("http://localhost:3000/valoresDosClientes")
        await this.web.get()
        this.cabecalho()
    }

    clientes() {
    }

    cabecalho() {
        const div = new Div("cabecalho")
        const table = new Table(div.element)
        const tr = new Tr("", table.element)
        new Celulas("th", tr.element, "Nome")
        new Celulas("th", tr.element, "Email")
        new Celulas("th", tr.element, "Telefone")
        new Celulas("th", tr.element, "Stats")
        new Celulas("th", tr.element, "Ação")
        console.log(this.web)

        // clientes 
        for (const clients of this.web.valores) {
            //const trClientes = new Tr("", table.element)
            console.log(clients)
            new Celulas("td", trClientes.element, clients.cliente)
            new Celulas("td", trClientes.element)
            new Celulas("td", trClientes.element)
            new Celulas("td", trClientes.element)
            new Celulas("td", trClientes.element)

        }
        const body = document.getElementById("comeco");
        body.appendChild(div.element)
        
    }
}