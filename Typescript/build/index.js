"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "jhonny";
    });
}
;
const bot = {
    id: "1",
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return "hello";
    }
}
const p = new Pessoa(1, "jhonny");
console.log(p);
console.log(p.sayHello());
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
class Magician extends Character {
    constructor(name, stregth, skill, magicpoints) {
        super(name, stregth, skill);
        this.magicpoints = magicpoints;
    }
}
const p1 = new Character("Ryu", 10, 98);
p1.attack();
const p2 = new Magician("Mago", 9, 30, 100);
p2.attack();
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [2]);
const stringArray = concatArray(["felipe", "goku"], ["vegeta"]);
console.log(numArray);
console.log(stringArray);
