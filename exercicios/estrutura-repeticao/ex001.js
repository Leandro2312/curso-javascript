//Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

//alert("Olá, eu estou aqui")

//prompt("ola mundo")
let numero = prompt("Digite um numero entre 0 e 10")

while (numero < 0 || numero > 10){
    numero = prompt("Valor inválido\nDigite um numero entre 0 e 10")
}

alert("Parabéns")


