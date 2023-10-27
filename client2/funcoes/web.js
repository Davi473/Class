class Valores {

    constructor(valor, parent) {
        this.site = valor
        this.get(parent)
    }

    async get(parent) {
        const site = await fetch(this.site)
        const valor =  await site.json(site)
        for (const cliente of valor) {
            this.clientes = new Tr("clientes")
            new Celulas("td", this.clientes.element, cliente.cliente)
            parent.appendChild(this.clientes)
        }
    }
}