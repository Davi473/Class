class Tela {

    constructor() {
        this.init();
    }

    async init() {
        const site = "http://localhost:3000/valoresDosClientes";
        const dados = await fetch(site);
        const valores = await dados.json();
        this.valoresClientes = []
        for (const valor of valores)[
            this.valoresClientes.push(valor)
        ]
        this.tabela()
    }

    tabela() {
        const divtabela = new Div("valor")

        const table = new Table("table-clientes")
        divtabela.addElement(table)
        const body = document.getElementById("comeco")
        body.appendChild(divtabela.element)
    }
}