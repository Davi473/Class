class Web {

    constructor(valor) {
        this.site = valor
    }

    async get() {
        const site = await fetch(this.site)
        const valor =  await site.json(site)
        this.valores = []
        for (const cliente of valor) {
            this.valores.push(cliente)
        }
        return this.valores
    }
}