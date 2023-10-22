class Stats {

    constructor(valor, parent, clientes="", id) {
        this.td = document.createElement("td")
        if (clientes==="Não") {

        } else {
            this.td.id =  "clientes"
        }
        this.select = document.createElement("select");
        if (clientes==="Não") {
            this.select.id = id
        }
        if (valor==="") {

        } else {
            this.option = document.createElement("option");
            this.option.innerText =  valor;
            this.select.appendChild(this.option);
        };
        const valoresStats = [
            "Novo", "Não Ligar Mais", "Ligar Mais Tarde"
        ];
        for (const stat of valoresStats) {
            if (stat === valor) {

            } else {
                this.option = document.createElement("option");
            this.option.innerText =  stat;
            this.select.appendChild(this.option);
            };
        };
        this.td.appendChild(this.select)
        parent.appendChild(this.td)
    };
};