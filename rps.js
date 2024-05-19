//some serious discussions about scope in this project. in the playRound funciton, those parameters are just temporary in a sense.
//they are created when the function runs - they can really be named anything. what matters is the parameters passed when the function is 
//called. (? im still really confused ont this...???)

function getComputerChoice() {
    //random choice bewteen rock, paper, and scissor
    let arr = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    let choice = arr[randomNum]
    return choice
}

function getPlayerChoice() {
    let arr = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    let choice = arr[randomNum]
    return choice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper.";
    }

    // Computer Case
    if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You lose! Scissors loses to rock.";
    }

    if (computerSelection == "paper" && playerSelection == "rock") {
        return "You lose! Rock loses to paper.";
    }

    if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You lose! Paper loses to scissors.";
    }

    // Tie case
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "Tie!";
    }

    if (playerSelection == "paper" && computerSelection == "paper") {
        return "Tie!";
    }

    if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Tie!";
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();


console.log("Player Selection: " + playerSelection)
console.log("Computer Selection: " + computerSelection)
console.log(playRound(playerSelection, computerSelection))

