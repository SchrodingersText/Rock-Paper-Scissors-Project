function getComputerChoice() {     
  const randomNumber = Math.floor(Math.random() * 100)     

  if (randomNumber >= 0 && randomNumber <= 32) {  
    return "rock"     
  } else if (randomNumber >= 33 && randomNumber <= 66) {
    return "leaf"     
  } else {
    return "snail"       
  }
}

const rockButton = document.querySelector('#rock');
const snailButton = document.querySelector('#snail');
const leafButton = document.querySelector('#leaf');
const buttonContainer = document.querySelector('#btn-container');
const resultText = document.querySelector('#result-text');
const resultsContainer = document.querySelector('#results-container');
const winnerText = document.createElement('div');
const resetButton = document.createElement('button');
resetButton.textContent = 'Play again?'
resetButton.setAttribute("id","reset-button")

let playerWins = 0;
let computerWins = 0;
let roundTies = 0;

const scoreboard = document.querySelector('#scoreboard');
buttonContainer.addEventListener('click', () => {
    scoreboard.textContent = `${playerWins} | ${computerWins} | ${roundTies}`;
});

function playRound(playerChoice, computerChoice) {
    playerChoice = this.id;
    computerChoice = getComputerChoice();
    
    if (playerWins === 5 || computerWins === 5) {
        return;
    };

    switch (playerChoice) {
        case "rock":
            if (computerChoice === "leaf") {
                resultText.textContent = `The computer wins this round! ${computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1)} covers ${playerChoice}.`;
                computerWins++;
            } else if (computerChoice === "snail") {
                resultText.textContent = `You win the round! ${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} clobbers ${computerChoice}.`;
                playerWins++;
            } else {
                resultText.textContent = `It's a tie! ${computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1)} against ${playerChoice}.`;
                roundTies++;
            }
            break;
        
        case "leaf":
            if (computerChoice === "snail") {
                resultText.textContent = `The computer wins this round! ${computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1)} eats the ${playerChoice}.`;
                computerWins++;
            } else if (computerChoice === "rock") {
                resultText.textContent = `You win the round! ${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} covers ${computerChoice}.`;
                playerWins++;
            } else {
                resultText.textContent = `It's a tie! ${computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1)} against ${playerChoice}.`;
                roundTies++;
            }
            break;
        
        case "snail":
            if (computerChoice === "rock") {
                resultText.textContent = `The computer wins this round! ${computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1)} clobbers ${playerChoice}.`;
                computerWins++;
            } else if (computerChoice === "leaf") {
                resultText.textContent = `You win the round! ${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} eats ${computerChoice}.`;
                playerWins++;
            } else {
                resultText.textContent = `It's a tie! ${computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1)} against ${playerChoice}.`;
                roundTies++;
            }
            break;
    }
};

function showWinner() {
    if (playerWins === 5) {
        resultsContainer.appendChild(winnerText);
        winnerText.textContent = "You've won the game!";
        resultsContainer.appendChild(resetButton)
    } else if (computerWins === 5) {
        resultsContainer.appendChild(winnerText);
        winnerText.textContent = "The computer wins the game.";
        resultsContainer.appendChild(resetButton)
    };
};

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    roundTies = 0;
    scoreboard.textContent = " ";
    resultText.textContent = "";
    resultsContainer.removeChild(winnerText);
    resultsContainer.removeChild(resetButton);
};

rockButton.addEventListener('click', playRound);
snailButton.addEventListener('click', playRound);
leafButton.addEventListener('click', playRound);
document.addEventListener('click', showWinner)
resetButton.addEventListener('click', resetGame)