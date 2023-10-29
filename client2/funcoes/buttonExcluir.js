class ButtonExcluir {

    constructor(parent, idButton) {
        this.td = document.createElement("td")
        this.td.id = "tabela"
        this.button = document.createElement("input")
        this.button.type = "submit"
        this.button.id = idButton;
        this.button.value = "Excluir"
        this.button.onclick = function() {
            //document.getElementById("adicionar").remove()
            document.getElementById("cabecalho").remove()
            const valor = idButton
            new Web("http://localhost:3000").post("/excluir", valor)
            new tableClientes()
        }
        this.td.appendChild(this.button)
        parent.appendChild(this.td)
    }
}