//Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
//A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//A mensagem "Reprovado", se a média for menor do que sete;
//A mensagem "Aprovado com Distinção", se a média for igual a dez.

let nota1 = 10
let nota2 = 10
let media = (nota1 + nota2) /2

if (media == 10){
    console.log("APROVADO COM DISTINÇÃO")
}else if (media >= 7){
    console.log("APROVADO")
}
if (media <= 6){
    console.log("REPROVADO")
}


