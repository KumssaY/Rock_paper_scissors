//set varriables for score
let playerScore = 0;
let computerScore = 0;

//get players choice
function getPlayerChoice () {
    
    let playerChoice = prompt('Enter your Choice(Rock, Paper or Scissors', '');

    return playerChoice.toUpperCase();
}

//get computer choice
function getComputerChoice () {

    const randomChoice = Math.random();

    if(randomChoice <0.33){
        return 'ROCK';
    }
    else if (randomChoice <0.66) {
        return 'PAPER';
    }
    else {
        return 'SCISSORS';
    }
}

//Checks for the winner in a single game
function checkForWinner (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playerScore += 0.5;
        computerScore += 0.5;
        return 'Draw';
    }

    else if (playerSelection == 'ROCK'){

        if (computerSelection == 'PAPER'){
            computerScore++;
            return 'You lose!! Paper beats Rock';
        }
        else{
            playerScore++
        }
        if (computerSelection == 'SCISSORS'){
            playerScore++
            return 'You win!! Rock beats Scissors';
        }
        else{
            computerScore++;
        }
    }
    else if (playerSelection == 'PAPER'){

        if (computerSelection == 'SCISSORS'){
            computerScore++;
            return 'You lose!! Scissors beats Paper';
        }
        else{
            playerScore++;
        }
        if (computerSelection == 'ROCK'){
            playerScore++;
            return 'You win!! Paper beats Rock';
        }
        else{
            computerScore++;
        }
    }
    else if (playerSelection == 'SCISSORS'){

        if (computerSelection == 'ROCK'){
            computerScore++;
            return 'You lose!! Rock beats Scissors';
        }
        else{
            playerScore++;
        }
        if (computerSelection == 'PAPER'){
            playerScore++;
            return 'You win!! Scissors beats Paper';
        }
        else{
            computerScore++;
        }
    }
    else {
        return 'Invalid entry';
    }
}

//function that allows game to be played 5 times and keeps the score of the player and computer
function game() {
    for(let round = 1; round <= 5; round++){

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        console.log(`Round: ${round}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(`You chose: ${playerSelection}`);
        console.log(checkForWinner(playerSelection,computerSelection));
        console.log('-------------------------------------------------------------------------------------');
    }

    console.log('Game-Over');
    console.log('-------------------------------------------------------------------------------------');
    console.log(`Final Score: Player(${playerScore}) vs Computer(${computerScore})`);
    console.log('-------------------------------------------------------------------------------------');
    if (playerScore > computerScore){
        console.log(`You won with a total of ${playerScore} games out of 5!!!!`);
    }
    else if (computerScore > playerScore){
        console.log(`You lost with a total of ${playerScore} games out of 5`);
    }
    else{
        console.log(`You Drew, with a total of ${playerScore} games out of 5`);
    }
}

//calling the game fucntion
game();