"use strict";
let ligado = false;
let nome = "jhonny";
let idade = 32;
let altura = 1.80;
let nulo = null;
let indefinido = undefined;
let retorno;
let retornoView = 1;
let produto = {
    name: "jhonny",
    cidade: "sp",
    idade: 30,
};
let meuProduto = {
    nome: "Tenis",
    preco: 30,
    unidade: 20,
};
let dados = ["felipe", "ana", "jhonny"];
let dados2 = ["felipe", "ana", "jhonny"];
let infos = ["felipe", 30, "jhonny", false];
let boleto = ["agua conta", 20, 30];
dados.pop();
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
function addNUmber(x, y) {
    return x + y;
}
let soma = addNUmber(4, 7);
console.log(soma);
function addNome(nome) {
    return `Olá ${nome}`;
}
console.log(addNome("Jhonny"));
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone(1131188));
