
let playerScoreDisplay = document.createElement('p')
let computerScoreDisplay = document.createElement('p')
let resultsDisplay = document.querySelector("#result").innerText


const weaponOptions = ["Rock", "Paper", "Scissors"]

function computerPlay (){
  //this fucntion will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
  let randomPlay = Math.floor(Math.random() * weaponOptions.length)
  // document.querySelector("#computerChoice").innerText
  return (weaponOptions [randomPlay]).toLowerCase()
    }					  


//const playerSelection = document.querySelector("#playerChoice").value.toLowerCase()

document.querySelector('#play').addEventListener('click', singlePlayRound)


function singlePlayRound(playerSelection, computerSelection) {
//function singlePlayRound plays a single round of Rock Paper Scissors

       playerSelection = document.querySelector("#playerChoice").value.toLowerCase() 
       computerSelection = computerPlay()
        //return document.querySelector("#computerChoice").innerText
        if ((playerSelection === "paper" && computerSelection === "scissors") ||  (playerSelection === "scissors" && computerSelection === "rock") || playerSelection === "rock" && computerSelection === "paper" ){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)}
          
        else if (playerSelection === computerSelection ) {
        console.log("It's a tie!")}

        else {console.log( `You Win! ${playerSelection} beats ${computerSelection}`  )}
        
      
      }




/*       function output(value) {
        value = singlePlayRound()
        const para = document.createElement('p');
        document.body.appendChild(para);
        para.textContent = `Value: ${value}`;
      }
 */

/* let playerScore = 0
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
 */
