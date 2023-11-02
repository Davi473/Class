class tableClients {

    constructor() {
        this.init()
    }

    async init() {
        const divTable = new Div()
        const table = new Table()
        divTable.element.appendChild(table.element)
        const divTr = new Div()
        table.element.appendChild(divTr.element)
        const tr = new Tr()
        divTr.element.appendChild(tr.element)
        const divTh = new Div()
        tr.element.appendChild(divTh.element)
        const th = new Celulas("th")
        divTh.element.appendChild(th.element)
        


        const value = await new Web("/valoresDosClientes").get()
        console.log(value)
        const [body] = document.getElementsByTagName("body");
        body.appendChild(divTable.element)
    }
}

