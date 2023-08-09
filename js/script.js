function getComputerChoice() {   // function returns either Rock, Paper, or Scissors when called
  const randomNumber = Math.floor(Math.random() * 100)    // the function first generates a random number between 0 and 99

  if (randomNumber >= 0 && randomNumber <= 32) {  
    return "Rock!"    // if the random number is between 0-32, Rock is returned
  } else if (randomNumber >= 33 && randomNumber <= 66) {
    return "Paper!"   // if the random number is between 33-66, Paper is returned
  } else {
    return "Scissors!"   // if the random number is between 67-99, Scissors is returned
  }
}