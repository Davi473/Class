class tableClientes {
    constructor() {
        this.init()
    }

    async init() {
        const web = new Web("http://localhost:3000/valoresDosClientes")
        await web.get()
        console.log(web.valores)
    }

    cabecalho() {
        const div = new Div("cabecalho")
        console.log(new Valores().valoresClientes)
        const body = document.getElementById("comeco");
        body.appendChild(div.element)
        
    }
}