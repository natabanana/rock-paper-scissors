
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
    
/* document.querySelector('#play').addEventListener('click', playRound)

let playerChoice = document.querySelector('#playerChoice').value.toLowerCase()

    function playRound(playerSelection, computerSelection) {
        
        computerSelection = computerPlay().toLowerCase()

        playerSelection = playerChoice

        console.log(document.querySelector("p").innerText = computerSelection)
        if (playerSelection === "paper" && computerSelection === "scissors"){
            
            document.querySelector("#result").innerText =  "You Lose! Scissors beats Paper"
        }
        else if (playerSelection === "scissors" && computerSelection === "rock"){
            document.querySelector("#result").innerText =  "You Lose! Rock beats Scissors"
        }
        else if (playerSelection === "rock" && computerSelection === "paper"){
            document.querySelector("#result").innerText =  "You Lose! Paper beats Rock"
        }
        else document.querySelector("p").innerText = "You win!"
            }
    
    
        console.log(playRound(playerSelection, computerSelection));	 */
    