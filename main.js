
const rockPaperScissors = ["Rock", "Paper", "Scissors"]

function computerPlay() {
  //this fucntion will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
  let randomPlay = Math.floor(Math.random() * rockPaperScissors.length)
  return (rockPaperScissors[randomPlay]).toLowerCase()
}


//const playerSelection = document.querySelector("#playerChoice").value.toLowerCase()


//document.querySelector('#play').addEventListener('click', game)


const buttonOptions = document.querySelectorAll("div.playerSelectionButtons button")
buttonOptions.forEach(button => { button.addEventListener('click', function() {singlePlayRound(button.value)})})

let playerScore = 0
let computerScore = 0


function singlePlayRound(playerSelection, computerSelection) {
  //function singlePlayRound plays a single round of Rock Paper Scissors
  
  computerSelection = computerPlay()

  
  let result = ""
  
  


  if ((playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock") || playerSelection === "rock" && computerSelection === "paper") {
    result =  `<br/> You lose ! ${computerSelection} beats ${playerSelection}. <br/> Player score: ${playerScore}. Computer score: ${computerScore}`
    computerScore++
  }

  else if (playerSelection === computerSelection) {
    result = `<br/> It's a tie! <br/> Player score: ${playerScore}. Computer score: ${computerScore}`}

  else { result =  `<br/> You win ! ${playerSelection} beats ${computerSelection}. <br/> Player score: ${playerScore}. Computer score: ${computerScore}` 
           playerScore++}
   
   document.getElementById("resultsDisplay").innerHTML = result

}






 function playMultipleRounds(numRounds) {
//function playMultipleRounds plays as many games of Rock,Paper, Scissors are the 
//user inputs 

  numRounds = prompt("How many rounds would you like to play ")
  results = []
  for (let i = 0; i < numRounds; i++) {
    results[i] = singlePlayRound()
    if (results[i].split(" ").includes("lose"))
      {computerScore++}

    else if (results[i].split(" ").includes("win"))
    {playerScore++}


  }

  console.log(results)
}



function game() {
  playMultipleRounds()

  if (playerScore > computerScore) {
    console.log(`You win! The computer score is ${computerScore} and your score is ${playerScore}`)
  }

  else {
    console.log(`You lose! The computer score is ${computerScore} and your score is ${playerScore}`)
  }


}
 

