class Stats {

    constructor(valor, parent) {
        this.td = document.createElement("td")
        this.td.id =  "clientes"
        this.select = document.createElement("select");
        this.option = document.createElement("option");
        this.option.innerText =  valor;
        this.select.appendChild(this.option)
        const valoresStats = [
            "NÃO", "NÃO LIGAR DE NOVO", "LIGAR MAIS TARDE"
        ];
        for (const stat of valoresStats) {
            this.option = document.createElement("option");
            this.option.innerText =  stat;
            this.select.appendChild(this.option)
        };
        this.td.appendChild(this.select)
        parent.appendChild(this.td)
    };
};