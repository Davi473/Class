class Cabecalho {

    constructor() {
        this.valoresClientes = []
    }

    init() {
        const div = new Div("cabecalho")
        const clientes = new Valores("http://localhost:2999/valoresDosClientes").get()
        div.addNaDiv(clientes)
        for (const c of this.valoresClientes) {
            console.log(c)
        }
        console.log(this.valoresClientes)

        
        const body = document.getElementById("comeco");
        body.appendChild(div.element)
        
    }
}