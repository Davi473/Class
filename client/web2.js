class ValoresClientes {

    constructor(site) {
        this.site = site
    }

    async get() {
        console.log(this.site)
        const site = await fetch(this.site);
        const dados = await site.json();
        this.lista = []
        for (const valor of dados) {
            this.lista.push(valor)
        }
        console.log(this.lista)
    }
}