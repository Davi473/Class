const { log } = require("console");
const express = require("express");
const app = express();
app.use(express.json());
app.use("/", express.static("./client2"));

// varivel dos clientes
const clientesAdicionados = [
    {cliente: "Davi Marcos Dorn", email: "davi###@gmail.com", telefone: "47 995####", stats: "Novo"},
    {cliente: "Fulano", email: "fulano@gmail.com", telefone: "47 7876####", stats: "Ligar Mais Tarde"}
];

app.get("/valoresDosClientes", function (req, res){
    res.json(clientesAdicionados);
});

app.post("/adicionar", function (req, res) {
    const lancamento = (req.body).valor;
    console.log(lancamento)
    clientesAdicionados.push(lancamento);
    res.end();
});

app.post("/excluir", function (req, res) {
    const excluir = (req.body).valor;
    clientesAdicionados.splice(excluir, excluir + 1);
    res.end();
});


app.listen(3000);