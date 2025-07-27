var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:none"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:none; margin-top: 55px;"
    
}
function RolarParaEsquerda() {
    Samantha.style = "display:flex"
    Leonardo.style = "display:none"
    setaDireita.style = "display:none; margin-top: 55px;"
    setaEsquerda.style = "display:none"
    
}