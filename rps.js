function getComputerChoice() {
    //random choice bewteen rock, paper, and scissor
    let arr = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    let choice = arr[randomNum]
    return choice
}


let computerSelection = getComputerChoice();
let playerSelection = 'rock'

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log('its a tie!')
    } else if (playerSelection === 'rock') {
        if(computerSelection === 'scissors') {
            console.log('rock beats scissors: player wins')
        } else {
            console.log('comp wins')
        }
    } else if (playerSelection === "paper") {
        if(computerSelection === 'rock') {
            console.log('paper beats rock: player wins')
        } else {
            console.log('comp wins')
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log('scissors beats paper: player wins')
        } else {
            console.log('comp wins')
        }
    } else {
       return
    }
}
console.log(playerSelection, computerSelection)
playRound(playerSelection, computerSelection)