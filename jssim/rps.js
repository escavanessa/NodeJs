

const rockButton = document.querySelector("#rock");
// btn1.addEventListener("click", () => {
//     console.log("hello")
// })
const paperButton = document.querySelector("#paper");
// btn2.addEventListener("click", () => {
//     console.log("hello")
// })
const scissorButton = document.querySelector("#scissor");
// btn3.addEventListener("click", () => {
//     console.log("hello")
// })
const results = document.querySelector("#result-wrapper");
//function humanSelection() {} maybe dont ened it because of the buttons?


function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * 3);
    let choice = choices[num];
    return choice
}

function playRound(playerSelection, computerSelection) {  //remember params are just place holders, they dont really mean anything
    if (playerSelection == "rock" && computerSelection == "scissors") {
        const p = document.createElement('p')
        p.innerText = 'You win! Rock beats scissors.'
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        const p = document.createElement('p')
        p.innerText = 'You win! Paper beats rock.'
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        const p = document.createElement('p')
        p.innerText = 'You win! Scissors beats paper.'
    }

    // Computer Case
    if (computerSelection == "rock" && playerSelection == "scissors") {
        const p = document.createElement('p')
        p.innerText = 'You lose! Scissors loses to rock.'
    }

    if (computerSelection == "paper" && playerSelection == "rock") {
        const p = document.createElement('p')
        p.innerText = 'You lose! Rock loses to paper.'
    }

    if (computerSelection == "scissors" && playerSelection == "paper") {
        const p = document.createElement('p')
        p.innerText = 'You lose! Paper loses to scissors.'
    }

    // Tie case
    if (playerSelection == "rock" && computerSelection == "rock") {
        const p = document.createElement('p')
        p.innerText = 'Tie!'
    }

    if (playerSelection == "paper" && computerSelection == "paper") {
        const p = document.createElement('p')
        p.innerText = 'Tie!'
    }

    if (playerSelection == "scissors" && computerSelection == "scissors") {
        const p = document.createElement('p')
        p.innerText = 'Tie!'
    }
}


rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay() //the random number
    const playerSelection = "rock"
    playRound(playerSelection, computerSelection)
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay() //the random number
    const playerSelection = "paper"
    playRound(playerSelection, computerSelection)
})


scissorButton.addEventListener('click', () => {
    const computerSelection = computerPlay() //the random number
    const playerSelection = "scissor"
    playRound(playerSelection, computerSelection)
})


let computerSelection = computerPlay() // if i made a game function to call the game like five times, this computer selection 
//would need to go inside the loop so the computer selection changes every time the loop interates. if not the selection would remian the same.



//checks
// let computer = computerSelection();
// console.log(computer)