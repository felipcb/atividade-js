//>>>Aporoach 02<<<
const num1=27, num2=36;
var i=2, init=0, meuLoop=0, result=1;
var mdc=[];

meuLoop = Math.max(num1,num2);
let temp1 = num1, temp2 =num2;

while (init<meuLoop){
    i=2;
    for (i; i < meuLoop; i++) {
        if(temp1%i==0 && temp2%i==0){
            mdc.push(i)
            temp1=temp1/i;
            temp2=temp2/i;
            break;
        } 
    }
    init++;
}
console.log(mdc)

for (let index = 0; index < mdc.length; index++) {
    console.log(mdc)
    result *= mdc[index];
}

console.log(result)



/*
//>>>Approach 01<<<
//números estão se repetindo na 
const num1=25, num2=15;
var result=0;
var divisiveis1=[], divisiveis2=[], iguais=[];
var i=2,j=2;
var x=0, y=0;
var result = 1;

//divisores do num1
let temp1=num1
while(i<=temp1){
    if(temp1%i==0){
        divisiveis1.push(i);
        temp1=temp1/i;
    }
    i++;
}

//divisores do num2
let temp2=num2
while(j<=temp2){
    if(temp2%j==0){
        divisiveis2.push(j);  
        temp2=temp2/j;   
    }
    j++;
}

//Intersecção dos divisores do num1 e num2
while(x!=divisiveis1.length){
    y=0;
    while(y!=divisiveis2.length){
        if (divisiveis1[x]==divisiveis2[y]) {
            iguais.push(divisiveis1[x]);  
        }
        y++;
    }
    x++
}

//Resultado do MDC
console.log(`tamanho do array ${iguais.length}`)
if(iguais.length==1){
    result= iguais*iguais;
}else{
    for (let index = 0; index < iguais.length; index++) {
        result = result * iguais[index];
    }
}



console.log(divisiveis1);
console.log(divisiveis2);
console.log(iguais);
console.log(`O MDC dos números ${num1} e ${num2} é igual a ${result}`);
*/
