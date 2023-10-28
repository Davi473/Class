class tableClientes {
    constructor() {
        this.init()
    }

    async init() {
        this.web = new Web("http://localhost:3000/valoresDosClientes")
        await web.get()
        console.log(this.web.valores)
    }

    cabecalho() {
        const div = new Div("cabecalho")
        
        const body = document.getElementById("comeco");
        body.appendChild(div.element)
        
    }
}