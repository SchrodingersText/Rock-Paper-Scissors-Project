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

function playRound(playerChoice, computerChoice) {
    playerChoice = this.id;
    computerChoice = getComputerChoice()

    switch (playerChoice) {
        case "rock":
            if (computerChoice === "leaf") {
                return `The computer wins this round! ${computerChoice} beats ${playerChoice}.`
            } else if (computerChoice === "snail") {
                return `You win the round! ${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`
            } else {
                return `It's a tie! ${computerChoice} against ${playerChoice}.`
            }
            break;
        
        case "leaf":
            if (computerChoice === "snail") {
                return `The computer wins this round! ${computerChoice} beat ${playerChoice}.`
            } else if (computerChoice === "rock") {
                return `You win the round! ${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`
            } else {
                return `It's a tie! ${computerChoice} against ${playerChoice}.`
            }
            break;
        
        case "snail":
            if (computerChoice === "rock") {
                return `The computer wins this round! ${computerChoice} beats ${playerChoice}.`
            } else if (computerChoice === "leaf") {
                return `You win the round! ${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} beat ${computerChoice}.`
            } else {
                return `It's a tie! ${computerChoice} against ${playerChoice}.`
            }
            break;
    }
};

const rockButton = document.querySelector('#rock');
const snailButton = document.querySelector('#snail');
const leafButton = document.querySelector('#leaf');

rockButton.addEventListener('click', playRound);
snailButton.addEventListener('click', playRound);
leafButton.addEventListener('click', playRound);


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