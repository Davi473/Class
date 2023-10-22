class ButtonAdicionar {

    constructor(parent) {
       this.buttonAdicionar(parent)
    };
    buttonAdicionar(parent) {
        this.input = document.createElement("input");
        this.input.type = "submit";
        this.input.value = "Adicionar";
        this.input.onclick = function() {
            this.onclick()
        };
        parent.appendChild(this.input);
    };

    onclick() {
        const nome = document.getElementById("Nome");
        const email = document.getElementById("Email");
        const telefone = document.getElementById("Telefone");
        const stats = document.getElementById("stats");
        fetch("http://localhost:3000/adicionar", { method: "post", headers: { "content-type": "application/json" }, body: JSON.stringify({ cliente: nome.value, email: email.value, telefone: telefone.value, stats: stats.value })})
        nome.value = "";
        email.value = "";
        telefone.value = "";
        document.getElementById("clientes").remove();
        document.getElementById("adicionar").remove();
        new Tela()
    }
};