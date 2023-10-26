class Valores {

    constructor(valor) {
        this.site = valor
    }

    async get() {
        const site = await fetch(this.site)
        const valor =  await site.json(site)
        for (const cliente of valor) {
            this.clientes = new Tr("clientes")
            new Celulas("td", this.clientes.element, cliente.cliente)
        }
        //parent.appendChild(this.clientes)
    }
}