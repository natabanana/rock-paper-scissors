
let playerScoreDisplay = document.createElement('p')
let computerScoreDisplay = document.createElement('p')
let resultsDisplay = document.querySelector("#result").innerText

// function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 

const rockPaperScissors = ["Rock", "Paper", "Scissors"];
    function computerPlay (){
    let randomPlay = Math.floor(Math.random() * rockPaperScissors.length)
    return (rockPaperScissors[randomPlay]).toLowerCase()
    }					  


function playerInput () {
  document.querySelector("#playerChoice").innerText = ""
  return document.querySelector("#playerChoice").value.toLowerCase()
}


//function playRound plays a single round of Rock Paper Scissors

document.querySelector('#play').addEventListener('click', playRound)



let playerScore = 0
let computerScore = 0 

function playRound(playerSelection, computerSelection) {
        
         playerSelection = playerInput()
         computerSelection = computerPlay()
         
        //return document.querySelector("#computerChoice").innerText

        if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++ 
        resultsDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        
        }
        else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++ 
        resultsDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        }
        else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++ 
        resultsDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        }
        else if (playerSelection === computerSelection) {resultsDisplay.textContent=  "It's a tie!"
        }
        else {
        playerScore++
        resultsDisplay.textContent = `You lose! ${playerSelection} beats ${computerSelection}`}
            
      playerScoreDisplay.textContent = "Player" + playerScore
      computerScoreDisplay.textContent = "Computer" + computerScore
      
      }




