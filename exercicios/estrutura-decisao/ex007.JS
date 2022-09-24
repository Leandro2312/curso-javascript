//Faça um Programa que leia três números e mostre-os em ordem decrescente.

let num1 = 6
let num2 = 4
let num3 = 8

if (num2 > num1 && num2 > num3){
    console.log("O PRIMEIRO MAIOR NÚMERO É: ",num2)
}
if (num3 > num1 && num3 > num2){
    console.log("O PRIMEIRO MAIOR NÚMERO É: ",num3)
}
if (num1 > num3 && num1 > num2){
    console.log("O PRIMEIRO MAIOR NÚMERO É: ",num1)
}
if (num2 > num1 && num2 < num3){
    console.log("O SEGUNDO MAIOR NÚMERO É: ",num2)
}
if (num3 > num1 && num3 < num2){
    console.log("O SEGUNDO MAIOR NÚMERO É: ",num3)
}
if (num1 > num3 && num1 < num2){
    console.log("O SEGUNDO MAIOR NÚMERO É: ",num1)
}else if (num2 < num1 && num2 > num3){
    console.log("O SEGUNDO MAIOR NÚMERO É: ",num2)
}
if (num3 < num1 && num3 > num2){
    console.log("O SEGUNDO MAIOR NÚMERO É: ",num3)
}
if (num1 < num3 && num1 > num2){
    console.log("O SEGUNDO MAIOR NÚMERO É: ",num1)
}

if (num2 < num1 && num2 < num3){
    console.log("O TERCEIRO MAIOR NÚMERO É: ",num2)
}
if (num3 < num1 && num3 < num2){
    console.log("O TERCEIRO MAIOR NÚMERO É: ",num3)
}
if (num1 < num3 && num1 < num2){
    console.log("O TERCEIRO MAIOR NÚMERO É: ",num1)
}



    