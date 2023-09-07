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
const resultText = document.querySelector('#result-text');

function playRound(playerChoice, computerChoice) {
    playerChoice = this.id;
    computerChoice = getComputerChoice();

    switch (playerChoice) {
        case "rock":
            if (computerChoice === "leaf") {
                resultText.textContent = `The computer wins this round! ${computerChoice} covers ${playerChoice}.`;
            } else if (computerChoice === "snail") {
                resultText.textContent = `You win the round! ${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} clobbers ${computerChoice}.`;
            } else {
                resultText.textContent = `It's a tie! ${computerChoice} against ${playerChoice}.`;
            }
            break;
        
        case "leaf":
            if (computerChoice === "snail") {
                resultText.textContent = `The computer wins this round! ${computerChoice} eats the ${playerChoice}.`;
            } else if (computerChoice === "rock") {
                resultText.textContent = `You win the round! ${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} covers ${computerChoice}.`;
            } else {
                resultText.textContent = `It's a tie! ${computerChoice} against ${playerChoice}.`;
            }
            break;
        
        case "snail":
            if (computerChoice === "rock") {
                resultText.textContent = `The computer wins this round! ${computerChoice} clobbers ${playerChoice}.`;
            } else if (computerChoice === "leaf") {
                resultText.textContent = `You win the round! ${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} eats ${computerChoice}.`;
            } else {
                resultText.textContent = `It's a tie! ${computerChoice} against ${playerChoice}.`;
            }
            break;
    }
};

rockButton.addEventListener('click', playRound);
snailButton.addEventListener('click', playRound);
leafButton.addEventListener('click', playRound);

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;


};


/*function game() {
    let playerWins = 0
    let computerWins = 0
    let ties = 0

    let roundOne = playRound()
    console.log(roundOne)
    roundOne.includes("computer") ? ++computerWins : ((roundOne.includes("You win")) ? ++playerWins : ++ ties)

    let roundTwo = playRound()
    console.log(roundTwo)
    roundTwo.includes("computer") ? ++computerWins : ((roundTwo.includes("You win")) ? ++playerWins : ++ ties)
    
    let roundThree = playRound()
    console.log(roundThree)
    roundThree.includes("computer") ? ++computerWins : ((roundThree.includes("You win")) ? ++playerWins : ++ ties)

    let roundFour = playRound()
    console.log(roundFour)
    roundFour.includes("computer") ? ++computerWins : ((roundFour.includes("You win")) ? ++playerWins : ++ ties)

    let roundFive = playRound()
    console.log(roundFive)
    roundFive.includes("computer") ? ++computerWins : ((roundFive.includes("You win")) ? ++playerWins : ++ ties)

    let gameWinner 

    if (playerWins > computerWins) {
        gameWinner = `You win the game, with ${playerWins} points & ${ties} ties.`
    } else if (computerWins > playerWins) {
        gameWinner = `The computer wins the game, with ${computerWins} points & ${ties} ties.`
    } else {
        gameWinner = `Game tied!`
    }

    return gameWinner;
}

console.log(game())
*/