score = 0
function updateScore(){
    score += 1 
    document.getElementById("score").innerHTML = "pontuação" + score
}
function salveScore(){
    localStorage.setItem ("Score",score)
}