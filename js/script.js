function getComputerChoice() {   // function returns either Rock, Paper, or Scissors when called
  const randomNumber = Math.floor(Math.random() * 100)    // the function first generates a random number between 0 and 99

  if (randomNumber >= 0 && randomNumber <= 32) {  
    return "Rock"    // if the random number is between 0-32, Rock is returned
  } else if (randomNumber >= 33 && randomNumber <= 66) {
    return "Paper"   // if the random number is between 33-66, Paper is returned
  } else {
    return "Scissors"   // if the random number is between 67-99, Scissors is returned
  }
}

function playRound(playerChoice, computerChoice) {
    playerChoice = prompt("Enter your choice. Rock, paper, or scissors?").toLowerCase()
    computerChoice = getComputerChoice()
    
    switch (playerChoice) {
        case "rock":
            if (computerChoice === "Paper") {
                return `The computer wins! ${computerChoice} beats ${playerChoice}.`
            } else if (computerChoice === "Scissors") {
                return `You win! ${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`
            } else {
                return `It's a tie! ${computerChoice} against ${playerChoice}`
            }
            break;
        
        case "paper":
            if (computerChoice === "Scissors") {
                return `The computer wins! ${computerChoice} beat ${playerChoice}.`
            } else if (computerChoice === "Rock") {
                return `You win! ${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`
            } else {
                return `It's a tie! ${computerChoice} against ${playerChoice}`
            }
            break;
        
        case "scissors":
            if (computerChoice === "Rock") {
                return `The computer wins! ${computerChoice} beats ${playerChoice}.`
            } else if (computerChoice === "Paper") {
                return `You win! ${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} beat ${computerChoice}.`
            } else {
                return `It's a tie! ${computerChoice} against ${playerChoice}`
            }
            break;
    }
}

function game() {
    let playerWins = 0
    let computerWins = 0
    let ties = 0

    let roundOne = playRound()
    roundOne.includes("computer") ? ++computerWins : ((roundOne.includes("You win")) ? ++playerWins : ++ ties)
    console.log(`You: ${playerWins} Computer: ${computerWins} Ties: ${ties}`)

    let roundTwo = playRound()
    roundTwo.includes("computer") ? ++computerWins : ((roundTwo.includes("You win")) ? ++playerWins : ++ ties)
    console.log(`You: ${playerWins} Computer: ${computerWins} Ties: ${ties}`)
    
    let roundThree = playRound()
    roundThree.includes("computer") ? ++computerWins : ((roundThree.includes("You win")) ? ++playerWins : ++ ties)
    console.log(`You: ${playerWins} Computer: ${computerWins} Ties: ${ties}`)

    let roundFour = playRound()
    roundFour.includes("computer") ? ++computerWins : ((roundFour.includes("You win")) ? ++playerWins : ++ ties)
    console.log(`You: ${playerWins} Computer: ${computerWins} Ties: ${ties}`)

    let roundFive = playRound()
    roundFive.includes("computer") ? ++computerWins : ((roundFive.includes("You win")) ? ++playerWins : ++ ties)
    console.log(`You: ${playerWins} Computer: ${computerWins} Ties: ${ties}`)

    let gameWinner 

    if (playerWins > computerWins) {
        gameWinner = `You win the game, with ${playerWins} points & ${ties} ties!`
    } else if (computerWins > playerWins) {
        gameWinner = `The computer wins the game, with ${computerWins} points & ${ties} ties!`
    } else {
        gameWinner = `Game tied!`
    }

    return gameWinner;
}