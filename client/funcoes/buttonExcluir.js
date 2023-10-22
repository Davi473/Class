class ButtonExcluir {

    constructor(parent, idButton) {
        this.td = document.createElement("td")
        this.td.id = "clientes"
        this.button = document.createElement("input")
        this.button.type = "submit"
        this.button.id = idButton;
        this.button.value = "Excluir"
        this.button.onclick = function() {
            document.getElementById("adicionar").remove()
            document.getElementById("clientes").remove()
            const valor = idButton
            fetch("http://localhost:3000/excluir", { method: "post", headers: { "content-type": "application/json" }, body: JSON.stringify({valor})});
            new Tela()
        }
        this.td.appendChild(this.button)
        parent.appendChild(this.td)
    }
}