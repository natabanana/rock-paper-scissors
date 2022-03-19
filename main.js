
// function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 

const rockPaperScissors = ["Rock", "Paper", "Scissors"];
    function computerPlay (){
    let randomPlay = Math.floor(Math.random() * rockPaperScissors.length)
    return rockPaperScissors[randomPlay]
    }					  
console.log(computerPlay())


function playerSelection () {
  document.querySelector("#playerChoice").innerText = ""
  return document.querySelector("#playerChoice").value.toLowerCase()
}
console.log(playerSelection())

function computerSelection (){
  return computerPlay().toLowerCase()
}
console.log(computerSelection())


//function playRound plays a single round of Rock Paper Scissors

document.querySelector('#play').addEventListener('click', playRound)

function playRound(playerSelection, computerSelection) {
        
        //return document.querySelector("#computerChoice").innerText
        
        if (playerSelection() === "paper" && computerSelection() === "scissors"){
        return document.querySelector("#result").innerText =  "You Lose! Scissors beats Paper"
        }
        else if (playerSelection() === "scissors" && computerSelection() === "rock"){
        return document.querySelector("#result").innerText =  "You Lose! Rock beats Scissors"
        }
        else if (playerSelection() === "rock" && computerSelection() === "paper"){
        return document.querySelector("#result").innerText =  "You Lose! Paper beats Rock"
        }
        else if (playerSelection === computerSelection ) {
            return document.querySelector("#result").innerText =  "It's a tie!"
        }
        else {return document.querySelector("p").innerText = "You win!"}
            }
    
    