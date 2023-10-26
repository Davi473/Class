class Valores {

    constructor(valor) {
        this.site = valor
    }

    async get() {
        const site = await fetch(this.site)
        const valor =  await site.json(site)
        const valores = new Cabecalho
        for (const cliente of valor) {
            valores.valoresClientes.push(cliente)
        }
    }
}