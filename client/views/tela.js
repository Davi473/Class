class Tela {

    constructor() {
        this.init();
    }

    init() {
        
        const valores = new ValoresClientes("http://localhost:2999/valoresDosClientes")
        this.valoresClientes = valores.get()
        console.log(this.valoresClientes)
        for (const c of this.valoresClientes) {
            console.log(c)
        }
        this.adicionarClientes();
        this.tabela();
    }

    adicionarClientes() {
        const divAdicionar = new Div("adicionar")
        const tableadicionar = new Table("adicionar-clientes")
        divAdicionar.element.appendChild(tableadicionar.element)
        const trAdicionar = new Tr("adicionar1")
        tableadicionar.element.appendChild(trAdicionar.element)
        new Input("text", trAdicionar.element, "Nome")
        new Input("text", trAdicionar.element, "Email")
        new Input("text", trAdicionar.element, "Telefone")
        const trAdicionar2 = new Tr("adicionar2")
        tableadicionar.element.appendChild(trAdicionar2.element)
        new Stats("", trAdicionar2.element, "Não", "stats")
        new ButtonAdicionar(trAdicionar2.element)
        
        const body = document.getElementById("comeco")
        body.appendChild(divAdicionar.element)
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
    };
};