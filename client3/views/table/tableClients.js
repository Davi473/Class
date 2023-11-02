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
            "Name", "Email", "Telephone", "Stats", "Action"
        ]
        for (const valueTable of valuesTable) {
            const divTh = new Div("tableTh")
            tr.element.appendChild(divTh.element)
            const th = new Celulas("th", valueTable, divTh.element)
        }

        // table clients
        const valueClients = await new Web("/valoresDosClientes").get()
        for (const value of valueClients) {
            const divClients = new Div("clients")
            table.element.appendChild(divClients.element)
            const trClients = new Tr()
            divClients.element.appendChild(trClients.element)
            const divTd = new Div("clients")
            trClients.element.appendChild(divTd.element)
            new Celulas("td", value.client, divTd.element)
            new Celulas("td", value.email, divTd.element)
            new Celulas("td", value.telephone, divTd.element)
            new Celulas("td", value.stats, divTd.element)
        }

        
        const [body] = document.getElementsByTagName("body");
        body.appendChild(divTable.element)
    }
}

