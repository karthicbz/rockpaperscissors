function getComputerChoice(){
    let randomValue = Math.floor(Math.random()*3);

    if(randomValue == 0){
        return 'rock';
    }else if(randomValue == 1){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    // console.log(computerSelection, playerSelection)
    if(playerSelection == 'rock' && computerSelection == 'scissors' || 
    playerSelection == 'paper' && computerSelection == 'rock' || 
    playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'You win';
    }else if(computerSelection == 'rock' && playerSelection == 'scissors' || 
    computerSelection == 'paper' && playerSelection == 'rock' || 
    computerSelection == 'scissors' && playerSelection == 'paper'){
        return 'Computer win';
    }else{
        return "It's a tie";
    }
}

/*function game(){
    let playerWinCount = 0;
    let computerWinCount = 0;
    let result;

    for(let i=0; i<5; i++){
        result = playRound(playerSelection(), getComputerChoice());
        console.log(result);
        if(result == 'player win'){
            playerWinCount += 1;
        }else{
            computerWinCount += 1;
        }
    }

    if(playerWinCount > computerWinCount){
        console.log('You beat the computer, humans can live in peace for one day..');
    }else if(playerWinCount < computerWinCount){
        console.log('Computer beats you, now who will save the mankind :(');
    }else{
        console.log('It\'s a tie');
    }
}*/

const playerSelectionButton = document.querySelectorAll('img');
const resultText = document.querySelector('.scoreDisplay');

playerSelectionButton.forEach((image)=>image.addEventListener('click', ()=>{
    // console.log(playRound(image.alt, getComputerChoice()));
    resultText.textContent = playRound(image.alt, getComputerChoice());
}))


// playerSelection.forEach((button)=>{
//     button.addEventListener('click', ()=>{
//         console.log(button.value);
//     })
// })

// game();