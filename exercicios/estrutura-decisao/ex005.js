//Faça um Programa que leia três números e mostre o maior deles.

let num1 = 1
let num2 = 2
let num3 = 3

if (num1 > num2 || num1 > num3){
    console.log(num1)
}else if (num2 > num1 || num2 > num3){
    console.log(num2)
}else if (num3 > num2 || num3 > num1){
    console.log(num3)
}