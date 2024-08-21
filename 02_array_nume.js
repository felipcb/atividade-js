var arrayNum = [ 5,8,9,4,6,2,1,7]

function minimo() {
    let temp = arrayNum[0];

    for (let index = 1; index < arrayNum.length; index++) {
        if(temp>arrayNum[index]){
            temp=arrayNum[index];
        }
    }
    return temp;
}

function maximo() {
    let temp = arrayNum[0];

    for (let index = 1; index < arrayNum.length; index++) {
        if(temp<arrayNum[index]){
            temp=arrayNum[index];
        }
    }
    return temp;
}


console.log(`O índice de menor valor no array é: ${minimo()}`)
console.log(`O índice de Maior valor no array é: ${maximol()}`)