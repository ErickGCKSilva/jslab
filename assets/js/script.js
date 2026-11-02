console.log("JavaScript carregado com sucesso!");

const pedidos = [
    {
        id: 1042,
        cliente: "Clínica Central",
        categoria: "Rede",
        prioridade: "alta",
        status: "atendimento",
        valor: 850
    },
    {
        id: 1043,
        cliente: "Loja Horizonte",
        categoria: "Hardware",
        prioridade: "normal",
        status: "aberto",
        valor: 420
    },
    {
        id: 1044,
        cliente: "Escritório Almeida",
        categoria: "Rede",
        prioridade: "urgente",
        status: "aberto",
        valor: 1200
    },
    {
        id: 1045,
        cliente: "Colégio Primavera",
        categoria: "Software",
        prioridade: "normal",
        status: "concluido",
        valor: 640
    },
    {
        id: 1046,
        cliente: "Mercado União",
        categoria: "Hardware",
        prioridade: "alta",
        status: "aberto",
        valor: 980
    },
    {
        id: 1047,
        cliente: "Studio Criativo",
        categoria: "Software",
        prioridade: "normal",
        status: "concluido",
        valor: 350
    }
];

const titulo =
    document.querySelector("h1");

titulo.classList.add("destaque");

const formatoMoeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

// criar um elemento

const paragrafo = document.createElement("p");
paragrafo.textContent = "Elemento criado com javascript";

//adicionando ao html

const lista = document.querySelector("#lista-pedidos");
lista.append(paragrafo)


function renderizarPedidos(listaPedidos) {

    const lista =
        document.querySelector(
            "#lista-pedidos"
        );

    lista.textContent = "";

            if (listaPedidos.length === 0){

            const aviso = document.createElement("h3");
            aviso.textContent = "Nenhum pedido encontrado!";      
            lista.append(aviso);
            return
        }

    listaPedidos.forEach(pedido => {

        const artigo = document.createElement("article");

        const titulo = document.createElement("h3");
        titulo.textContent = `PS-${pedido.id}`;

        const client = document.createElement("p");
        client.textContent = `Nome do cliente: ${pedido.cliente}`;

        const category = document.createElement("p");
        category.textContent = `Categoria: ${pedido.categoria}`;

        const prioridad = document.createElement("p");
        prioridad.textContent = `Prioridade: ${pedido.prioridade}`;

        const stats = document.createElement("p");
        stats.textContent = `Status: ${pedido.status}`;

        const val = document.createElement("p");
        val.textContent = `Valor: ${formatoMoeda.format(pedido.valor)}`;

        artigo.append(titulo, client, category, prioridad, stats, val);

        lista.append(artigo);

    });
}

renderizarPedidos(pedidos);