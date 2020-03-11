let div2 = document.createElement('div');
document.body.appendChild(div2);

let div3 = document.createElement('div');
document.body.appendChild(div3);

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    div2.textContent = playRound(button.className, computerPlay());
    if(computerPoints === 5) {
      div3.textContent = "Computer win..so sad! Press the button below to play again!";
    }else if(playerPoints === 5){
      div3.textContent = "You win! Press the button below to play again!"
    }else{
      div3.textContent = ""
    }
  });
});

let playAgainButton = document.getElementById('playagain');

playAgainButton.addEventListener('click', function() {
  computerPoints = 0;
  playerPoints = 0;
  div3.textContent = "";
});



let computerPoints = 0;
let playerPoints = 0;

let element = ["rock", "paper", "scissors"];

//questa funzione prende in maniera casuale uno degli elementi del vettore
function computerPlay() {
  return element[Math.floor(Math.random() * element.length)];
}

let playerSelection;
let computerSelection;

//funzione del singolo round
function playRound(playerSelection, computerSelection) {

playerSelection = playerSelection.replace(/rock/i, 'rock');
playerSelection = playerSelection.replace(/paper/i, 'paper');
playerSelection = playerSelection.replace(/scissors/i, 'scissors');


  if(playerSelection === 'rock' && computerSelection === 'paper') {
    return ('Computer vince, il risultato è :' + playerPoints + "-" + ++computerPoints);
  } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
    return ('Giocatore vince, il risultato è :' + ++playerPoints + "-" + computerPoints);
  } else if(playerSelection === 'paper' && computerSelection === 'rock') {
    return ('Giocatore vince, il risultato è :' + ++playerPoints + "-" + computerPoints);
  } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
    return ('Computer vince, il risultato è :' + playerPoints + "-" + ++computerPoints);
  } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
    return ('Giocatore vince, il risultato è :' + ++playerPoints + "-" + computerPoints);    
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return ('Computer vince, il risultato è :' + playerPoints + "-" + ++computerPoints);
  } else if (playerSelection == computerSelection) {
    return ('Pareggio');
  } else {
    return ('Rematch');
  }
}


  




