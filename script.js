

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

    if (playerSelection === computerSelection) {
        return "tie";
    }

    switch (playerSelection) {
        case "ROCK":
            if (computerSelection === "PAPER"){
                return "computer";
            } else {
                return "player";
            }
            break;
        case "PAPER":
            if (computerSelection === "SISSORS") {
                return "computer";
            } else {
                return "player";
            }
            break;
        case "SISSORS":
            if (computerSelection == "ROCK") {
                return "computer";
            } else {
                return "player";
            }
    }
}

function playGame() {
    let playerScore = 0;
    let cmpScore = 0;
    let playerSelection;
    let computerSelection;
    let winner;
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "ROCK";
    const paperBtn = document.createElement("button");
    paperBtn.textContent = "PAPER";
    const sissorBtn = document.createElement("button");
    sissorBtn.textContent = "SISSORS";
    const container = document.querySelector("div");

    const statsDiv = document.createElement("div");
    const playerStats = document.createElement("p");
    const cmpStats = document.createElement("p");
    const gameStats = document.createElement("p");
    playerStats.textContent = "Your Score: 0";
    cmpStats.textContent = "Computer Score: 0";

    container.appendChild(rockBtn);
    container.appendChild(paperBtn);
    container.appendChild(sissorBtn);

    container.appendChild(statsDiv);
    statsDiv.appendChild(playerStats);
    statsDiv.appendChild(cmpStats);
    statsDiv.appendChild(gameStats);
    
    container.addEventListener("click", function gameOn(e){
        playerSelection = e.target.textContent;
        computerSelection = getComputerChoice();
        winner = playRound(playerSelection, computerSelection);
       
        if (winner === "tie") {
            playerStats.textContent = `Your Score: ${playerScore} | [[${playerSelection}]]`;
            cmpStats.textContent = `Computer Score: ${cmpScore} | [[${computerSelection}]]`;
            gameStats.textContent = "It's a tie"
        } else if (winner === "player") {
            playerScore++;
            playerStats.textContent = `Your Score: ${playerScore} | [[${playerSelection}]]`;
            cmpStats.textContent = `Computer Score: ${cmpScore} | [[${computerSelection}]]`;
            gameStats.textContent = 'You win this round!';
        } else if (winner === "computer") {
            cmpScore++;
            playerStats.textContent = `Your Score: ${playerScore} | [[${playerSelection}]]`;
            cmpStats.textContent = `Computer Score: ${cmpScore} | [[${computerSelection}]]`;
            gameStats.textContent = 'Computer wins this round :(';
        }
        console.log("YOUR SCORE: " + playerScore);
        console.log("COMPUTER: " + cmpScore);
    
    
        if (playerScore >= 5 || cmpScore >= 5) {
            if (winner === "player") {
                gameStats.textContent = "CONGRATS, YOU WIN THE GAME, CLAIM YOUR $20 HERE";
            }else {
                gameStats.textContent = "AWW, YOU LOSE THE GAME, GIVE THE COMPUTER $20";
            }
            container.removeEventListener("click", gameOn);
            return winner;
        }
    })
    
}

playGame();