let name = document.querySelector(".buttons");

console.log(name);

function computerPlay() {
    value = Math.floor(Math.random() * 3);
    if( value == 0 ){
        return "Rock";
    }
    else if ( value == 1 ){
        return "Paper";
    }
    else
        return "Scissors";
}

function playRound ( playerSelection, computerSelection ) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if ( playerSelection == "rock" ) {
        if ( computerSelection == "rock") {
            return "It's a Draw. Play again?";
        }
        else if ( computerSelection == "paper" ) {
            return "You Lose! Paper beats Rock"
        }
        else {
            return "You Win! Rock beats Scissors";
        }
    }
    else if ( playerSelection == "paper" ) {
        if ( computerSelection == "rock" ) {
            return "You Win! Paper beats Rock";
        }
        else if ( computerSelection == "paper" ) {
            return "It's a Draw. Play again?";
        }
        else {
            return "You Lose! Scissors beat Paper";
        }
    }
    else if ( playerSelection == "scissors" ) {
        if ( computerSelection == "rock" ) {
            return "You Lose! Rock beat Scissors";
        }
        else if ( computerSelection == "paper" ) {
            return "You Win! Scissors beat Paper";
        }
        else {
            return "It's a draw. Play again?";
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for ( i = 0; i < 5 ; i ++ ) {
        let playerSelection = "rock";
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if ( playRound(playerSelection, computerSelection).startsWith("You Win")) {
            scorePlayer++;
        }
        else if ( playRound(playerSelection, computerSelection).startsWith("You Lose")) {
            scoreComputer++;
        }
    }
    console.log("Hrac ma skore " + scorePlayer + " a pocitac ma skore " + scoreComputer);
    if ( scorePlayer > scoreComputer ) {
        console.log("Player won");
    }
    else if ( scoreComputer > scorePlayer ) {
        console.log("Computer won");
    }
    else {
        console.log("It's a draw!");
    }
}

game();