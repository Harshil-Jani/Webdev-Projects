let playerScore = 0;
let compScore = 0;
const playerScore_div = document.getElementById("Player_Score");
const compScore_div = document.getElementById("Computer_Score");
const scoreBoard_div = document.querySelector("#score");
const result_div = document.querySelector("#result");
const rock_button = document.getElementById("Rock");
const paper_button = document.getElementById("Paper");
const scissors_button = document.getElementById("Scissors");

function getCompChoice(){
    const choices = ['R', 'P', 'S'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(value){
    if(value==='R'){
        return "Rock";
    }
    if (value==='P'){
        return "Paper";
    }
    return "Scissors";
}

function win(player,computer){
    playerScore++;
    playerScore_div.innerHTML = playerScore;
    compScore_div.innerHTML = compScore;
    result_div.innerHTML = " <b>You Won !</b> <br> Your Choice : " + convertToWord(player) + "<br>        Computer's Choice : " + convertToWord(computer);
    document.getElementById(convertToWord(player)).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(convertToWord(player)).classList.remove('green-glow');
    },300);
}

function lost(player,computer){
    compScore++;
    playerScore_div.innerHTML = playerScore;
    compScore_div.innerHTML = compScore;
    result_div.innerHTML = " <b>You Lost !</b> <br> Your Choice : " + convertToWord(player) + "<br>        Computer's Choice : " + convertToWord(computer);
    document.getElementById(convertToWord(player)).classList.add('red-glow');
    setTimeout(function(){
        document.getElementById(convertToWord(player)).classList.remove('red-glow');
    },300);
}

function draw(player,computer){
    playerScore_div.innerHTML = playerScore;
    compScore_div.innerHTML = compScore;
    result_div.innerHTML = " <b>Its a Draw!</b> <br> Your Choice : " + convertToWord(player) + "<br>        Computer's Choice : " + convertToWord(computer);
    document.getElementById(convertToWord(player)).classList.add('blue-glow');
    setTimeout(function(){
        document.getElementById(convertToWord(player)).classList.remove('blue-glow');
    },300);
}

function game(choice){
    const CompChoice = getCompChoice();
    switch(choice + CompChoice){
        case "RP":
        case "PS":
        case "SR":
            lost(choice,CompChoice);
            break;
        case "RS":
        case "PR":
        case "SP":
           win(choice,CompChoice);
            break;
        case "RR":
        case "SS":
        case "PP":
            draw(choice,CompChoice);
            break;
    }
}

function main() {

    rock_button.addEventListener('click', function () {
        game("R");
    })
    paper_button.addEventListener('click', function () {
        game("P");
    })
    scissors_button.addEventListener('click', function () {
        game("S");
    })
}

main();
