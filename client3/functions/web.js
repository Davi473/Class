class Web {

    constructor(value) {
        this.site = value
    }

    async get() {
        const site = await fetch(this.site)
        const values = await site.json(site)
        return values
    }
}