class Valores {

    constructor(valor) {
        this.site = valor
    }

    async get() {
        console.log(this.site)
        const site = await fetch(this.site)
        const valor =  await site.json(site)
        for (const cliente of valor) {
            console.log(cliente)
            const clientes = new Tr("clientes")
            new Células("td", clientes, cliente.cliente)
        }
    }
}