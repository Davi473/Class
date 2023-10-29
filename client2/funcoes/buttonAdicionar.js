class ButtonAdicionar {

    constructor(parent) {
        this.input = document.createElement("input");
        this.input.type = "submit";
        this.input.value = "Adicionar";
        this.input.onclick = function() {
            const nome = document.getElementById("Nome");
            const email = document.getElementById("Email");
            const telefone = document.getElementById("Telefone");
            const stats = document.getElementById("stats");
            const valor = { cliente: nome.value, email: email.value, telefone: telefone.value, stats: stats.value }
            new Web("http://localhost:3000").post("/adicionar", valor)
            nome.value = "";
            email.value = "";
            telefone.value = "";
            document.getElementById("adicionar").remove();
            document.getElementById("cabecalho").remove();
            new Main()
        };
        parent.appendChild(this.input);
     };
}