/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';
*/

/*
let nome = prompt("informe seu nome")
// Nome: maior que 3 caracteres;
while(nome.length <= 3){

}
let idade = prompt("informe sua idade")

while(idade < 0 || idade > 150){
    //Idade: entre 0 e 150;
    idade = prompt("informe sua idade")
}

/*
let salario = prompt("informe seu salario")
//Salário: maior que zero;
while(salario <= 0){
    salario = prompt("informe seu salario")
}
let sexo = prompt("informe seu sexo (f ou m)")
// Sexo: 'f' ou 'm'; 
while (sexo != 'f' && sexo != 'm'){
    sexo = prompt("informe o sexo (f ou m)")
}
let estadoCivil = prompt("informe o estado civil(s-solteiro, c - casado, v - viúvo, d - divorciado)")
//Estado Civil: 's', 'c', 'v', 'd';
while(estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd'){
    estadoCivil = prompt("informe o estado civil(s-solteiro, c - casado, v - viúvo, d - divorciado)")
}
*/

function CadastrarCliente(){
    let nome = document.querySelector("#nome").value
    if(nome.length < 3){
        document.querySelector("#erro-nome").innerHTML = "<em>O nome deve possuir mais de 3 caracteres</em>"
        document.querySelector("#nome").Focus()
        return
    }else{
        document.querySelector("#erro-nome").innerHTML = ""
    }

    

    alert("Cadastro efetuado com secusso!!!")
}
