
let playerScoreDisplay = document.createElement('p')
let computerScoreDisplay = document.createElement('p')
let resultsDisplay = document.querySelector("#result").innerText




const playerSelection = document.querySelector(".playerChoice").value.toLowerCase()
const computerSelection = computerPlay();
const weaponOptions = ["Rock", "Paper", "Scissors"];

function computerPlay (){
  //this fucntion will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
  let randomPlay = Math.floor(Math.random() * weaponOptions.length)
  // document.querySelector("#computerChoice").innerText
  return (weaponOptions [randomPlay]).toLowerCase()
    }					  


document.querySelector('.playerChoice').addEventListener('click', singlePlayRound)


function singlePlayRound(playerSelection, computerSelection) {
//function singlePlayRound plays a single round of Rock Paper Scissors

        //return document.querySelector("#computerChoice").innerText
        if (playerSelection === "paper" && computerSelection === "scissors"){
        return document.querySelector("#result").innerText =  "You Lose! Scissors beats Paper"}
          
        else if (playerSelection === "scissors" && computerSelection === "rock"){
        return document.querySelector("#result").innerText =  "You Lose! Rock beats Scissors"}

    
        else if (playerSelection === "rock" && computerSelection === "paper"){
        return document.querySelector("#result").innerText =  "You Lose! Paper beats Rock"
          }

        else if (playerSelection === computerSelection ) {
        return document.querySelector("#result").innerText =  "It's a tie!"}

        else {return document.querySelector("#result").innerText = "You win!"}
        
      
      }


let playerScore = 0
let computerScore = 0 

function game() {        

resultSingleRound = singlePlayRound(playerSelection, computerSelection)

  for (let i = 0; i < 5; i++) {
    if (resultSingleRound.split(" ").includes("lose")) {
      computerScore++
    }
    else {
      playerScore++}
  }
  console.log(computerScore)
  console.log(playerScore)
  if (playerScore > computerScore){
    alert("You won!")}
  
  else { alert("You lost!")}

}

