////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

var wins = 5; // this variable sets the number of wins required for either player or computer. 
//Note: can adjust the Tied amount within the playToWins function below, to end the game if so many ties.

//welcome message:

alert("Welcome to the Rock, Paper, Scissors game, you will be prompted for a move, until " + wins + " wins have been reached by either yourself or the computer. \nPlease see the console for results. \nGood luck :)");


console.log('Let\'s play Rock Paper Scissors');

// changed getInput() to display proper message.
function getInput() {
    var message = ("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt(message +"\n" + "Score - Player: " + playerWins + ", Computer: " + computerWins + ", Tied: " + tie);
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move === null || move === undefined ? getInput() : move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move === null || move === undefined ? randomPlay() : move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    
    // display the moves to the console.
    console.log("Player Move: " + playerMove.toUpperCase() + ": Computer Move: " + computerMove.toUpperCase());
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove === computerMove){

         winner = 'tie';
         }

    if(playerMove === 'rock' && computerMove === 'scissors'){
        winner = 'player';
    }else if(computerMove === 'rock' && playerMove === 'scissors'){
        winner = 'computer';
    }

    if(playerMove === 'scissors' && computerMove === 'paper'){
        winner = 'player';
    }else if(computerMove === 'scissors' && playerMove === 'paper'){
        winner = 'computer';
    }

    if(playerMove === 'paper' && computerMove === 'rock'){
        winner = 'player';
    }else if(computerMove === 'paper' && playerMove === 'rock'){
        winner = 'computer';
    }
    
    return winner;
}
    
 
/*function playToFive() {
    /*console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
     //YOUR CODE HERE 
    return [playerWins, computerWins];   
    
}*/
// My code below to get game to function
var playerWins = 0, computerWins = 0, tie = 0, round = 0;

function outcome(){
  
  var result = getWinner();
  var total;
  
        if(result){
         
          round++;  console.log("This is round: " + round);
          
          if(result === 'player'){
          console.log("The winner of this round is: player");
          playerWins++; 
          }
    
          else if(result === 'computer'){
          console.log("The winner of this round is: computer");
          computerWins++; 
          }
          
          else if(result === "tie"){
          console.log("The result was a tie");
          tie++;
          }
          
          total = [playerWins, computerWins, tie];
          
          console.log(("Scores: Player: " + playerWins + " Computer: " + computerWins + " Tied: " + tie)); 
  
          console.log(total);
          }
        
        
        return playToWins();
}
// playToWins function will run outcome function, remember to set # of wins above, can amend # of ties below.
function playToWins(){
  
      if((playerWins === wins) || (computerWins === wins)){
            
            console.log("Final Scores: Player: " + playerWins + " Computer: " + computerWins);
            alert("Good game!" + "\n" + "Final Scores - Player: " + playerWins + ", Computer: " + computerWins);
            
        
            return; // Need this to end game when required amount met.
        }else if(tie === 10){
          
            console.log("Enough, beer time :)");
            alert("So many Tied, time for a beer!");
      
            return; // Ditto above can set amount of tied results to end the game.
        }
    
      outcome();
    
}

playToWins();


