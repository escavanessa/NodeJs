

const btn1 = document.querySelector("#rock");
btn1.addEventListener("click", () => {
    console.log("hello")
})

const btn2 = document.querySelector("#paper");
btn2.addEventListener("click", () => {
    console.log("hello")
})

const btn3 = document.querySelector("#scissor");
btn3.addEventListener("click", () => {
    console.log("hello")
})


//function humanSelection() {} maybe dont ened it because of the buttons?


function computerSelection() {
    let choices = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * 3);
    let choice = choices[num];
    return choice
}

function playRound() {
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

let computerChoice = computerSelection()



//checks
// let computer = computerSelection();
// console.log(computer)