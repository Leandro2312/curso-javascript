function QuemEhEssePokemon(pokemon){
    if(pokemon == "pikachu"){
        alert("Parabéns, você acertou")
    }else{
        alert("Infelizmente você errou.")
    }
    document.querySelector("#pokemon-imagem").style.filter="brightness(1)"

    document.querySelector("#nome-pokemon").innerHTML = "Pikachu"
}