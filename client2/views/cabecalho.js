class Cabecalho {

    constructor() {
        this.valoresClientes = []
    }

    init() {
        const div = new Div("cabecalho")
        new Valores("http://localhost:2999/valoresDosClientes").get()
        console.log(this.valoresClientes)
        for (const c of this.valoresClientes) {
            console.log(c)
        }
        console.log(this.valoresClientes)

        
        const body = document.getElementById("comeco");
        body.appendChild(div.element)
        
    }
}