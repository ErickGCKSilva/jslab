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

// const pedidos = [
//      {
//         id: 1042,
//         cliente: "Clínica Central",
//         prioridade: "alta",
//         status: "atendimento",
//         valor: 850
//     },
//     {
//         id: 1043,
//         cliente: "Loja Horizonte",
//         prioridade: "normal",
//         status: "aberto",
//         valor: 420
//     },
//     {
//         id: 1044,
//         cliente: "Escritório Almeida",
//         prioridade: "urgente",
//         status: "aberto",
//         valor: 1200
//     }
// ];

// pedidos.forEach(pedido => {
//     console.log(`Número do pedido: ${pedido.id} Valor: ${pedido.valor}`);
// });

// //comparação de valores

// let maior_valor = pedidos[0].id;
// let nome = pedidos[0].cliente;

// pedidos.forEach(elemento=>{

//     if (elemento.valor> maior_valor){
//         maior_valor = elemento.valor;
//         nome = elemento.cliente;
//     }
// });

// console.log(`O pedido mais caro do cliente: ${nome}, com R$${maior_valor.toFixed(2)}`);

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

// const pedido_encontrado = pedidos.find(pedido => pedido.id === 67);

// console.log(pedido_encontrado);

// function buscarpedido(id) {
//     return pedidos.find(pedido => pedido.id === id);
// };

// console.log(buscarpedido(1042));

// const posicao = pedidos.findIndex(
//     pedido => pedido.id === 1043
// );

// console.log(posicao);

// const statusaberto = pedidos.filter( pedido =>
//     pedido.status === "aberto"
// );

// console.log(statusaberto);



// function filtrarPorPrioridade(prioridade) {

//     return pedidos.filter(pedido => pedido.prioridade === prioridade);

// }

// console.log(filtrarPorPrioridade("alta"));

// const resumo = pedidos.map(pedido => {

//     return console.log(`${pedido.id} - ${pedido.cliente}`);

// });

// console.log(resumo);

const cliente0 = "LOJA";

// Agora faça a pesquisa considerar também:

// cliente;

// status;

// prioridade.

// O usuário deve poder pesquisar um termo e receber pedidos cujo conteúdo possua esse texto em algum desses campos.

// Tente desenvolver antes de procurar uma solução pronta.

function pesquisacliente(termo){

    const termomin = termo.toLowerCase();
    return pedidos.filter(pedido => 
            pedido.cliente
                        .toLowerCase()
                        .includes(termomin)
        );

};

console.log(pesquisacliente(cliente0));