class Tela {

    constructor() {
        this.init();
    }

    async init() {
        const site = "http:///localhost:3000/valoresDosClientes";
        const dados = await fetch(site);
        const valores = await dados.json();
        this.valoresClientes = []
        for (const valor of valores)[
            this.valoresClientes.push(valor)
        ]
        console.log(this.valoresClientes)
        this.tabela()
    }

    tabela() {
        const divtabela = new Div("valor")

        const table = new Table("table-clientes")
        divtabela.element.appendChild(table.element)
        
        for (const client of this.valoresClientes) {
            const trCliente = new Tr("clientes")
            new Celulas("th", client.cliente, trCliente.element, "clientes")
            console.log(client.cliente)
            new Celulas("th", client.email, trCliente.element, "clientes")
            new Celulas("th", client.telefone, trCliente.element, "clientes")
            // Colocar botão de excluir
            table.element.appendChild(trCliente.element)

        }
        const body = document.getElementById("comeco")
        body.appendChild(divtabela.element)
    }
}