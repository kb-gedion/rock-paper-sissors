

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Sissors";
            break;
        default:
            return "Error";
    };
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let message;
    console.log("PLAYER :" + playerSelection);
    console.log("CMPTR: " + computerSelection)

    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    }

    switch (playerSelection) {
        case "ROCK":
            if (computerSelection === "PAPER"){
                return "You Lose! Paper beats Rock";
            } else {
                return "You Win! Rock beats Sissors";
            }
            break;
        case "PAPER":
            if (computerSelection === "SISSORS") {
                return "You Lose! Sissor beats Paper";
            } else {
                return "You Win! Paper beats Rock";
            }
            break;
        case "SISSORS":
            if (computerSelection == "ROCK") {
                return "You Lose! Rock beats Sissors";
            } else {
                return "You Win! Sissors beat Paper";
            }
    }
}
