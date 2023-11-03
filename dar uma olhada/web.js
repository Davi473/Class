class fetchHttp /* implements http */ {
	constructor(site) {
		this.site = site;
	}

	async get(url) {
		let response = await this.requisicao("get", url);
		return response;
	}

	async post(url, valor) {
		this.requisicao("post", url, valor);
	}

	async delete(url, valor) {
		this.requisicao("delete", url, valor);
	}

	async requisicao(tipo, url, valor) {
		let response = await fetch(this.site + url, {
			method: tipo, //get, post, delete
			headers: { "content-type": "application/json" },
			body: JSON.stringify(dado),
		});
		return response.json();
	}
}

class xmlHttp /* implements http */ {
	constructor(site) {
		this.site = site;
	}

	async get(url) {
		let response = await this.requisicao("get", url);
		return response;
	}

	async post(url, valor) {
		this.requisicao("post", url, valor);
	}

	async delete(url, valor) {
		this.requisicao("delete", url, valor);
	}

	async requisicao(tipo, url, valor) {
		return new Promise(function (resolve, reject) {
			const xhr = new XMLHttpRequest();
			xhr.open(tipo, this.site + url);
			xhr.setRequestHeader(
				"Content-Type",
				"application/json; charset=UTF-8"
			);
			xhr.onload = () => {
				resolve(JSON.parse(xhr.responseText));
			};
			xhr.send(JSON.stringify(dado));
		});
	}
}

/*
    interface http { 
        get(string url): JSON,
        post(string url, JSON valor): void,
        post(string url, JSON valor): void,
        requisicao(string tipo, string url, JSON valor): JSON
    }
*/
