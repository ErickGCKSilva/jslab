console.log("JavaScript carregado com sucesso!");

// Arrays

// const categorias = [
//     "Infraestrutura",
//     "Software",
//     "Hardware",
//     "Rede"
// ];


// categorias.forEach(categoria => {
//     console.log(categoria);
// });

// Objetos

// const pedido = {
//     id: 67,
//     situacao: "Fazendo",
//     local: "Aqui",
//     prioridade: "Alta"
// };
// pedido.id = 6767;

// console.log(pedido);

//Arrays de Objetos

const pedidos = [
    {
        id: 1042,
        cliente: "Clínica Central",
        prioridade: "alta",
        status: "atendimento",
        valor: 850
    },
    {
        id: 1043,
        cliente: "Loja Horizonte",
        prioridade: "normal",
        status: "aberto",
        valor: 420
    },
    {
        id: 1044,
        cliente: "Escritório Almeida",
        prioridade: "urgente",
        status: "aberto",
        valor: 1200
    }
];

pedidos.forEach(pedido => {
    console.log(`Número do pedido: ${pedido.id} Valor: ${pedido.valor}`);
});

//comparação de valores

let maior_valor = pedidos[0].id;
let nome = pedidos[0].cliente;

pedidos.forEach(elemento=>{

    if (elemento.valor> maior_valor){
        maior_valor = elemento.valor;
        nome = elemento.cliente;
    }
});

console.log(`O pedido mais caro do cliente: ${nome}, com R$${maior_valor.toFixed(2)}`);