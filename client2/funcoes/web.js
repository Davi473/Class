class Web {

    constructor(site) {
        this.site = site
    }

    async get(local) {
        const site = await fetch(this.site + local)
        const valor =  await site.json(site)
        return valor
    }

    async post(local, valor) {
        fetch(this.site + local, { method: "post", headers: { "content-type": "application/json" }, body: JSON.stringify({valor})});
    }
}