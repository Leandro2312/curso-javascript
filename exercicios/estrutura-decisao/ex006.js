//Faça um Programa que leia três números e mostre o maior e o menor deles.

let num1 = 8
let num2 = 5
let num3 = 2

if (num2 > num1 && num2 > num3){
    console.log("O MAIOR NÚMERO É: ",num2)
}
if (num3 > num1 && num3 > num2){
    console.log("O MAIOR NÚMERO É: ",num3)
}
if (num1 > num3 && num1 > num2){
    console.log("O MAIOR NÚMERO É: ",num1)
}

if (num2 < num1 && num2 < num3){
    console.log("O MENOR NÚMERO É: ",num2)
}
if (num3 < num1 && num3 < num2){
    console.log("O MENOR NÚMERO É: ",num3)
}
if (num1 < num3 && num1 < num2){
    console.log("O MENOR NÚMERO É: ",num1)
}