function playRound(playerSelection, computerSelection) {
    // Player chooses rock
    if (playerSelection === "rock" && computerSelection === 'scissors') {
        return 'Win! Rock beats Scissors';
    } else if (playerSelection === "rock" && computerSelection === 'paper') {
        return 'Lose! Paper beats Rock';
    } else if (playerSelection === "rock" && computerSelection === 'rock') {
        return 'Draw! Both of you have selected Rock';

    // Player chooses scissors
    } else if (playerSelection === "scissors" && computerSelection === 'scissors') {
        return 'Draw! Both of you have selected Scissors';
    } else if (playerSelection === "scissors" && computerSelection === 'paper') {
        return 'Win! Scissors beats Paper';
    } else if (playerSelection === "scissors" && computerSelection === 'rock') {
        return 'Lose! Rock beats Scissors';

    // Player chooses paper
    } else if (playerSelection === "paper" && computerSelection === 'scissors') {
        return 'Lose! Scissors beats Paper';
    } else if (playerSelection === "paper" && computerSelection === 'paper') {
        return 'Draw! Both of you have selected Paper';
    } else if (playerSelection === "paper" && computerSelection === 'rock') {
        return 'Win! Paper beats Rock';

    // Invalid input
    } else {
        return 'Your input is invalid'
    }
}

function computerPlay() {
    let index = Math.floor(Math.random()*3);
    const list = ["rock","paper","scissors"];
    return list[index];
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i=0; i<5; i++) {
        // Initialise the value for the result of the round
        let roundResult = 'Your input is invalid'
        while (roundResult === 'Your input is invalid') {
            let response = prompt("Scissors, Paper, Rock. Which do you pick?");
            let playerSelection = response.toLowerCase();
            let computerSelection = computerPlay();
            roundResult = playRound(playerSelection,computerSelection);
        }
        console.log(roundResult);

        // Add 1 point to the player score if he wins
        if (roundResult.charAt(0) === 'W') {
            ++playerScore;
        } else if (roundResult.charAt(0) === 'L') {
            ++computerScore;
        }
    }
    // If player has a higher score
    if (playerScore > computerScore) {
        console.log("You win! Your score: %d, computer score: %d",playerScore,computerScore);
    // if player has a lower score
    } else if (computerScore > playerScore) {
        console.log("You lose! Your score: %d, computer score: %d",playerScore,computerScore);

    // if draw
    } else if (playerScore === computerScore) {
        console.log("It's a draw! Your score: %d, computer score: %d",playerScore,computerScore)
    }
}

const buttons = document.querySelectorAll('button');
let results = document.querySelector('#results');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

let playerScoreVariable = 0;
let computerScoreVariable =0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.textContent.toLowerCase();
        console.log(typeof playerSelection);
        console.log(playerSelection);
        let computerSelection = computerPlay();
        console.log(typeof computerSelection);
        console.log(computerSelection);
        let result = playRound(playerSelection, computerSelection);
        results.textContent = result;
        if (result.charAt(0) === 'W') {
            ++ playerScoreVariable;
        } else if (result.charAt(0) === 'L') {
            ++ computerScoreVariable;
        }
        playerScore.textContent = playerScoreVariable.toString();
        computerScore.textContent = computerScoreVariable.toString();
        if (playerScoreVariable === 5) {
            results.textContent = 'Player is the winner';
        } else if (computerScoreVariable === 5) {
            results.textContent = 'Computer is the winner';
        }
    })
    
})