console.log("JavaScript carregado com sucesso!");

//Exercício 22
// const nome = "laranjas";
// const preco = 2.99;
// let quantidade;
// let desconto = 5;
// const disponibilidade = 1000;

// quantidade = +prompt("Digite a quandidade de laranjas: ");
// const subtotal = preco*quantidade;
// desconto = subtotal*(desconto/100);
// const vlrfinal = subtotal - desconto;


// console.log(`Produto: ${nome}`);
// console.log(`Valor do desconto: R$${desconto.toFixed(2)}`);
// console.log(`Valor final: R$${vlrfinal.toFixed(2)}`);

// console.log(typeof subtotal);
// console.log(typeof desconto);
// console.log(typeof nome);

//Exercício 28
// const prioridade = "alta";
// const atrasado = false;

// if (prioridade === "alta" && atrasado === true) {
//     console.log("ATENÇÃO IMEDIATA");
// } else {
//     console.log("Acomapnhamento normal");
// }


// Exercício 29
// const idade = 17
// const possuiCadastro =  true
// const bloqueado = false;

// if (idade >= 18 && possuiCadastro === true && bloqueado === false){
//     console.log("Acesso liberado")
// }   else {
//     console.log("Acesso negado")
// }

//Desafio Final

const cliente = "Erick";
const valor = 105;
const prioridade = "alta"
const atrasado = false;
let qtddesconto;
let valorfinal;
let desconto;


if (valor>=100){
    qtddesconto = 10;
} else if (valor>=200) {
    qtddesconto = 20;
} else {
    qtddesconto = 0;
}

if (prioridade === "alta" && atrasado === true) {
    console.log("===STATUS DO PEDIDO===");
    console.log("ATENÇÃO IMEDIATA")
} else {
    console.log("===STATUS DO PEDIDO===");
    console.log("ACOMPANHAMENTO NORMAL")
}

desconto = valor*(qtddesconto/100);
valorfinal = valor - desconto

console.log(`Valor do produto: R${valor.toFixed(2)}`);
console.log(`Valor do desconto: R${desconto.toFixed(2)}`);
console.log(`Valor final: R${valorfinal.toFixed(2)}`);