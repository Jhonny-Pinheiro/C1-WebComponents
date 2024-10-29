let ligado: boolean = false;
let nome: string = "jhonny";
let idade: number = 32;
let altura: number = 1.80;

let nulo: null = null;
let indefinido: undefined = undefined;

let retorno: void 
let retornoView:any = 1

let produto:object = {
    name:"jhonny",
    cidade:"sp",
    idade: 30,
};

type ProdutoLoja = {
    nome:string;
    preco:number;
    unidade:number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 30,
    unidade: 20,
};

let dados:string[] = ["felipe", "ana", "jhonny"];
let dados2: Array<string>=["felipe", "ana", "jhonny"];

let infos: (string | number | boolean)[]=["felipe",30,"jhonny", false];

let boleto:[string,number,number]=["agua conta", 20, 30];

dados.pop();

let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());

function addNUmber(x: number,y:number): number{
    return x + y;
}

let soma:number = addNUmber(4,7);
console.log(soma);

function addNome(nome:string):string{
    return `Olá ${nome}`;
}

console.log(addNome("Jhonny"));

function CallToPhone(phone: number | string){
    return phone;
}

console.log(CallToPhone(1131188));

async function getDatabase(id:number): Promise <string>{
    return"jhonny";
}