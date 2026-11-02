const parametros =
    new URLSearchParams(
        window.location.search
    );

const id =
    Number(
        parametros.get("id")
    );

console.log(id);

const pedido =
    pedidos.find(
        pedido => pedido.id === id
    )

console.log(pedido);