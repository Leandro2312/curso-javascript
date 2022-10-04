//Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
//C = 5 * ((F-32) / 9).
function calcTemperatura(){


let fahrenheit = parseFloat(document.querySelector("#fahrenheit").value)

let celsius = ((fahrenheit-32) / 1.8)

document.querySelector("#resultado").innerHTML = ' Fahrenheit em Celsius : ' + celsius

}
