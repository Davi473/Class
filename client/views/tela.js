class Tela {

    constructor() {
        this.init();
    }

    async init() {
        const site = "http:///localhost:3000/valoresDosClientes";
        const dados = await fetch(site);
        const valores = await dados.json();
        this.valoresClientes = [];
        for (const valor of valores)[
            this.valoresClientes.push(valor)
        ];
        this.tabela();
    }
    // terminar
    adicionarClientes() {
        const divAdicionar = new Div("adicionar")
        const tableadicionar = new Table()
    }

    tabela() {
        const divtabela = new Div("clientes");
        const table = new Table("table-clientes");
        const valores = new Tr("clientes");
        table.element.appendChild(valores.element);
        const valoresStats = [
            "NOME", "EMAIL", "TELEFONE", "STATS", "AÇÃO"
        ];
        for (const valor of valoresStats) {
            new Celulas("th", valor, valores.element, "clientes"); 
        };
        divtabela.element.appendChild(table.element);
        let valorExcluir = 0;
        let valorButton = 0;
        for (const client of this.valoresClientes) {
            const trCliente = new Tr("clientes", valorExcluir);
            valorExcluir += 1;
            new Celulas("td", client.cliente, trCliente.element, "clientes");
            new Celulas("td", client.email, trCliente.element, "clientes");
            new Celulas("td", client.telefone, trCliente.element, "clientes");
            new Stats(client.stats, trCliente.element);
            new ButtonExcluir(trCliente.element, valorButton);
            valorButton += 1;
            table.element.appendChild(trCliente.element);
        };
        const body = document.getElementById("comeco");
        body.appendChild(divtabela.element);
    }
}