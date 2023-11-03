class Main {

    constructor(servidorClientes, servidorArquivo) {
        new formularioCliente()
        new listaCliente(servidorClientes, Table)
    }
}

//let servidorClientesFetch = new fetchHttp("http://localhost:3000");
let servidorClientesXml = new xmlHttp("http://localhost:3000");
//let servidorArquivo = new Web("http://localhost:3003");

new Main(
    servidorClientes /*: http */,
    servidorArquivo
)