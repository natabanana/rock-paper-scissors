
let playerScoreDisplay = document.createElement('p')
let computerScoreDisplay = document.createElement('p')
let resultsDisplay = document.querySelector("#result").innerText


const weaponOptions = ["Rock", "Paper", "Scissors"]

function computerPlay() {
  //this fucntion will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
  let randomPlay = Math.floor(Math.random() * weaponOptions.length)
  // document.querySelector("#computerChoice").innerText
  return (weaponOptions[randomPlay]).toLowerCase()
}


//const playerSelection = document.querySelector("#playerChoice").value.toLowerCase()


//document.querySelector('#play').addEventListener('click', game)


const buttonOptions = document.querySelectorAll("div.playerSelectionButtons button")

buttonOptions.forEach(button => { button.addEventListener('click', function() {singlePlayRound(button.value)})})



function singlePlayRound(playerSelection, computerSelection) {
  //function singlePlayRound plays a single round of Rock Paper Scissors
  
  computerSelection = computerPlay()
  //return document.querySelector("#computerChoice").innerText
  
  if ((playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock") || playerSelection === "rock" && computerSelection === "paper") {
    console.log ( `You lose ! ${computerSelection} beats ${playerSelection}`)
  }

  else if (playerSelection === computerSelection) {
   console.log ("It's a tie!")
  }

   else { console.log( `You win ! ${playerSelection} beats ${computerSelection}` )}


}


let playerScore = 0
let computerScore = 0



/* function playMultipleRounds(numRounds) {
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
 */

function output() {
  let value = game()
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = `Result: ${value}`;

}

