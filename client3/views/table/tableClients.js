class tableClients {

    constructor() {
        this.init()
    }

    async init() {
        const divTable = new Div("table")
        const table = new Table()
        divTable.element.appendChild(table.element)
        const divTr = new Div("table")
        table.element.appendChild(divTr.element)
        const tr = new Tr()
        divTr.element.appendChild(tr.element)
        const valuesTable = [
            "Nome", "Email", "Telefone", "Stats", "Ação"
        ]
        for (const valueTable of valuesTable) {
            const divTh = new Div("tableTh")
            tr.element.appendChild(divTh.element)
            const th = new Celulas("th")
            th.element.innerText = valueTable
            divTh.element.appendChild(th.element)
        }


        const value = await new Web("/valoresDosClientes").get()
        console.log(value)
        const [body] = document.getElementsByTagName("body");
        body.appendChild(divTable.element)
    }
}

