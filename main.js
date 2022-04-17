
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
const divFinalResults = document.querySelector("#resultsDisplay")







let playerScore = 0
let computerScore = 0


function singlePlayRound(playerSelection, computerSelection) {
  //function singlePlayRound plays a single round of Rock Paper Scissors
  
  computerSelection = computerPlay()

  let finalResult = " "
  let result = ""
 


  if ((playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock") || playerSelection === "rock" && computerSelection === "paper") {
    computerScore++
    result =  `<br/> You lose ! ${computerSelection} beats ${playerSelection}. <br/><br/>  Player score: ${playerScore}. Computer score: ${computerScore}`
    document.getElementById("resultsDisplay").innerHTML = result

    if (computerScore === 5) {
      finalResult = `<br/>You lose! The final score is: <br/>  computer score: ${computerScore} and your score: ${playerScore}`
      document.getElementById("resultsDisplay").innerHTML = finalResult
      divFinalResults.style.cssText = "background-color: pink; border: 1px solid black"
      
      
    }
    
  }

  else if (playerSelection === computerSelection) {
    result = `<br/> It's a tie! <br/><br/>  Player score: ${playerScore}. Computer score: ${computerScore}`
    document.getElementById("resultsDisplay").innerHTML = result}

  else {  playerScore++
    result =  `<br/> You win ! ${playerSelection} beats ${computerSelection}. <br/><br/>  Player score: ${playerScore}. Computer score: ${computerScore}` 
    document.getElementById("resultsDisplay").innerHTML = result     
      if (playerScore === 5) {
        finalResult = `<br/>You win! The final score is: <br/>  computer score: ${computerScore} and your score: ${playerScore}`
        document.getElementById("resultsDisplay").innerHTML =  finalResult
        divFinalResults.style.cssText = "background-color: green; border: 1px solid black"
      }
        }
   
 

}





/* 
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
 */


function game() {
 

  if (playerScore > computerScore) {
    console.log(`You win! The computer score is ${computerScore} and your score is ${playerScore}`)
  }

  else {
    console.log(`You lose! The computer score is ${computerScore} and your score is ${playerScore}`)
  }


}
 

