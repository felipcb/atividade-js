//>>>Aproach 01<<<\\

var listNumInteiros = [], numerosMultiplos = [];
var somaDosMultiplos = 0;

//Função para gerar lista de 1 a 1000
function geraNumeros (){
    for (let index = 1; index <= 1000; index++) {
        listNumInteiros.push(index);   
    }
}
geraNumeros();
console.log(listNumInteiros); 
console.log(" ");

//Função para guardar os múltiplos de 5 e 7
function multiplos(){
    for (let index = 0; index < listNumInteiros.length; index++) {
        if(listNumInteiros[index]%5==0 || listNumInteiros[index]%7==0){
            numerosMultiplos.push(listNumInteiros[index]);
        };
    }
    return numerosMultiplos;
}
multiplos();

//Printar os Multiplos
console.log(`Os múltiplos de 5 e 7 são: ${numerosMultiplos}`);
console.log(" ");


//função para a soma total dos múltiplos de 5 e 7 de 1 a 1000.
for (let index = 0; index < numerosMultiplos.length; index++) {
    somaDosMultiplos += numerosMultiplos[index];   
};

//Printar a soma dos múltiplos de 5 e 7 de 1 a 1000.
console.log(`A soma dos múltiplos de 5 e 7 no intervalo de 1 a 1000 é:
${somaDosMultiplos}`);

module.exports = { multiplos}