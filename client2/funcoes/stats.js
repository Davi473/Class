class Stats {

    constructor(stats="", parent) {
        const select = document.createElement("select")
        if (stats==="") {} else {
            const option = document.createElement("option")
            option.innerText = stats
            select.appendChild(option)
        }
        const valoresDeStats = [
            "Novo", "Ligar Mais Tarde", "Não ligar Mais"
        ]
        for (const valor of valoresDeStats) {
            if (valor === stats) {

            } else {
                const option = document.createElement("option")
                option.innerText = valor
                select.appendChild(option)
            }
        }
        parent.appendChild(select)
    }

}