class ValoresClientes {

    constructor() {
        
    }

    post(valor, posicocao="") {

        if (posicocao === "excluir") {
            fetch("http://localhost:3000/excluir", { method: "post", headers: { "content-type": "application/json" }, body: JSON.stringify({valor})});
        }
        if (posicocao === "adicionar") {
            fetch("http://localhost:3000/adicionar", { method: "post", headers: { "content-type": "application/json" }, body: JSON.stringify({valor})});
        }
    }
}

