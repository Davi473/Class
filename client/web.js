class ValoresClientes {


    constructor() {
        this.site()
    }
    async site() {
        this.valoresClientes = []
        const site = "http:///localhost:2999/valoresDosClientes";
        const dados = await fetch(site);
        const valore = await dados.json();
        for (const valor of valore)[
            this.valoresClientes.push(valor)
        ];
    }

    post(valor, posicao="") {

        if (posicao === "excluir") {
            fetch("http://localhost:2999/excluir", { method: "post", headers: { "content-type": "application/json" }, body: JSON.stringify({valor})});
        }
        if (posicao === "adicionar") {
            fetch("http://localhost:2999/adicionar", { method: "post", headers: { "content-type": "application/json" }, body: JSON.stringify({valor})});
        };
    };
};

