
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

document.querySelector('#play').addEventListener('click', game)


function singlePlayRound(playerSelection, computerSelection) {
//function singlePlayRound plays a single round of Rock Paper Scissors

       playerSelection = document.querySelector("#playerChoice").value.toLowerCase() 
       computerSelection = computerPlay()
        //return document.querySelector("#computerChoice").innerText
        if ((playerSelection === "paper" && computerSelection === "scissors") ||  (playerSelection === "scissors" && computerSelection === "rock") || playerSelection === "rock" && computerSelection === "paper" ){
        return `You lose ! ${computerSelection} beats ${playerSelection}`}
          
        else if (playerSelection === computerSelection ) {
        return "It's a tie!"}

        else {return `You win ! ${playerSelection} beats ${computerSelection}`  }
        
      
      }


let playerScore = 0
let computerScore = 0 

function scoreCount() {
  let singleGame = singlePlayRound() 
  for (let i = 0; i < 5; i++) {
    if (singleGame.split(" ").includes("lose")) {
      computerScore++
    }

    else if (singleGame.split(" ").includes("win")) {
      playerScore++
    }

  }
  
}

function game () {
  let score = scoreCount()

  if (playerScore > computerScore) {
    console.log( `You win! The computer score is ${computerScore} and your score is ${playerScore}`)
  }

  else {console.log( `You lose! The computer score is ${computerScore} and your score is ${playerScore}`)
}


}


function output(value) {
        value = game()
        const para = document.createElement('p');
        document.body.appendChild(para);
        para.textContent = `Result: ${value}`;
      
}

