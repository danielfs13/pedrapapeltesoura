let userScore = 0;
let computerScore = 0;
let StreakNumber = 0;
let HigherStreak = 0;

const Hstreak = document.getElementById('Higher')
const Streak_Span = document.getElementById("StreakNumber")
const userScore_span = document.getElementById("voce-score");
const computerScore_span = document.getElementById("pc-score");

let placar_div = document.querySelector("placar");
const resultado_p = document.querySelector(".resultado > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices [randomNumber];  
}

function ConvertePalavra(letra) {
    if (letra === "r") return "Pedra";
    if (letra === "p") return "Papel";
    if (letra === "s") return "Tesoura";
}

function corbranca(){
    document.getElementById('placar').style.borderColor = "white";
}

function corverde() {
    document.getElementById('placar').style.borderColor = "green";
    setTimeout(corbranca, 750);
}

function corvermelha() {
    document.getElementById('placar').style.borderColor = "red";
    setTimeout(corbranca, 750);
}

function corazul() {
    document.getElementById('placar').style.borderColor = "blue";
    setTimeout(corbranca, 750);
}

function MaxStreak() {
    Higher.innerHTML = Math.max(StreakNumber);
}

function WinStreak() {
    if (userScore > 0)
    StreakNumber++
    Streak_Span.innerHTML = StreakNumber;
    MaxStreak();

}

function WinStreakFail(){
    StreakNumber = 0;
    Streak_Span.innerHTML = StreakNumber;
}




function win(UserChoice, ComputerChoice) {
    userScore++;
    userScore_span.innerHTML  = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "você".fontsize(3).sub();
    const smallPCWord = "PC".fontsize(3).sub();
    resultado_p.innerHTML = `${ConvertePalavra(UserChoice)}${smallUserWord} ganha de  ${ConvertePalavra(ComputerChoice)}${smallPCWord} . Você ganhou!`; 
    // document.getElementById('placar').classList.remove('placar');
    // document.getElementById('placar').classList.add('placarVerde');
    placar_div = corverde();
    WinStreak();
}

function lose(UserChoice, ComputerChoice) {
    computerScore++;
    userScore_span.innerHTML  = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "você".fontsize(3).sub();
    const smallPCWord = "PC".fontsize(3).sub();
    resultado_p.innerHTML = `${ConvertePalavra(UserChoice)}${smallUserWord} perde para  ${ConvertePalavra(ComputerChoice)}${smallPCWord} . Você perdeu!`; 
    placar_div = corvermelha();
    WinStreakFail();
}

function draw(UserChoice, ComputerChoice) {
    const smallUserWord = "você".fontsize(3).sub();
    const smallPCWord = "PC".fontsize(3).sub();
    resultado_p.innerHTML = `${ConvertePalavra(UserChoice)}${smallUserWord} igual  ${ConvertePalavra(ComputerChoice)}${smallPCWord} . Empate!`; 
    placar_div = corazul();
    WinStreakFail();
}



function game(UserChoice) {
    const ComputerChoice = getComputerChoice();
    switch (UserChoice + ComputerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(UserChoice, ComputerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(UserChoice, ComputerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(UserChoice, ComputerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })

}



main();