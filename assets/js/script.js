console.log("JavaScript carregado com sucesso!");

const nome = "laranjas";
const preco = 2.99;
let quantidade;
let desconto = 5;
const disponibilidade = 1000;

quantidade = +prompt("Digite a quandidade de laranjas: ");
const subtotal = preco*quantidade;
desconto = subtotal*(desconto/100);
const vlrfinal = subtotal - desconto;


console.log(`Produto: ${nome}`);
console.log(`Valor do desconto: R$${desconto.toFixed(2)}`);
console.log(`Valor final: R$${vlrfinal.toFixed(2)}`);

console.log(typeof subtotal);
console.log(typeof desconto);
console.log(typeof nome);

