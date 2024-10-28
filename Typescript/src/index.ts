type heroi = {
    name: string;
    vulgo: string;
};

function printaObjeto(pessoa: heroi) {
    console.log(pessoa);
}

//teste remove coments
printaObjeto({ 
    name: "Bruce Wayne",
    vulgo: "Batman"
});