
player1_name = localStorage.getItem("player1Name")
player2_name = localStorage.getItem("player2Name")

player1_score = 0
player2_score = 0
document.getElementById("player1_name").innerHTML = player1_name  
document.getElementById("player2_name").innerHTML = player2_name 
document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = playe2_score

function send (){
    getWord = document.getElementById("worde").value
    palavra = getWord.toLowerCase()
    charAt1 = palavra.charAt(1)
    length_divide_2 = Math.floor(palavra.length/2)   
    length_minus_1 = palavra.length - 1
    charAt2 = palavra.charAt("length_divide_2")
    charAt3 = palavra.charAt("lenght_minus_1")   
    removeCharAt1 = palavra.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    question_word = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_word + inputBox + checkButton
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
questionTurn = "player1"
answerTurn = "player2"

function Check(){
    getAnswer = document.getElementById("inputCheckBox").value
    answer = getAnswer.toLowerCase()
    if (answer == word){
        if (anwerTurn == "player1"){
            player1_score += 1 
            document.getElementById("player1_score").innerHTML = player1_score
        }
        else{
            player2_score += 1 
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if(questionTurn == "player1"){
        questionTurn = "player2"
        document.getElementById("player_question").innerHTML = "turno de pergunta" + player2_name
    }
    else{
        questionTurn = "player1"
        document.getElementById("player_question").innerHTML = "turno de pergunta" + player2_name
    }
    if(answerTurn == "player1"){
        answerTurn = "player1"
        document.getElementById("player_answer").innerHTML = "turno de resposta" + player2_name
    }
    else{
        answerTurn = "player1"
        document.getElementById("player_answer").innerHTML = "turno de resposta" + player2_name
    }
        document.getElementById("output").innerHTML = ""
}