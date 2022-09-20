/* Operadores Lógicos

&& --> operador E (and)
|| --> operador OU (or)
! ---> operador NÃO (not)
*/

let n1 = 10
let n2 = 5
let n3 = 20

//console.log(!(n1 > n2))
//console.log(!(false))
// o operador ! (not or Não) inverte o resultado...

console.log(n1 > n2 && n1 > n3)
console.log(n1 > n2 || n1 > n3)


// operador && -->Avalia todas as operações, se uma for FALSE o resultado é FALSE
// OPERADOR || --> Avalia todas as operações, se uma for TRUE O RESULTADO É TRUE