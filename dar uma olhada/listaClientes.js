class listaClientes {

	constructor(servidor, Table) {
		this.Table = Table;
		this.init(servidor);
	}

	async init(servidor) {
		this.clientes = await servidor.get("/clientes");
	}

	renderiza() {
		let tabela = document.getElementById('tabela-clientes');
		for (const cliente of this.clientes) {
			tabela.appendChild(`
				<tr>
					<td>${client.nome}</td>
					<td>${client.telefone}</td>
					<td>${client.status}</td>
				</tr>
			`);
		}
	}

}
