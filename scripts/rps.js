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

const playerSelectionButton = document.querySelectorAll('img');
const resultText = document.querySelector('.scoreDisplay');
const playsRemaining = document.querySelector('.playRemaining');
const replay = document.querySelector('a');
const playerOptions = document.querySelector('.playerOptions');
const computerChoosed = document.querySelector('.computerChoosed');

let count = 5;
let playerWinCount = 0;
let computerWinCount = 0;

playsRemaining.textContent = `plays remaining: ${count}`;

computerChoosed.innerHTML = '';

playerSelectionButton.forEach((image)=>image.addEventListener('click', ()=>{
    // console.log(playRound(image.alt, getComputerChoice()));
    const computerChoice = getComputerChoice();
    computerChoosed.innerHTML = `<p>Computer's Choice</p><img src='./img/${computerChoice}.png'>`;
    // computerChoosed.innerHTML.setAttribute('src', `./img/${computerChoice}.png`);
    const result = playRound(image.alt, computerChoice);
    resultText.textContent = result;
    playsRemaining.textContent = `plays remaining: ${--count}`;
    game(result, count);
}));

replay.addEventListener('click', ()=>{
    location.reload();
});

function game(result, count){
    // let result;

    if(result == 'You win'){
        playerWinCount += 1;
    }else if(result == 'Computer win'){
        computerWinCount += 1;
    }

    if(count == 0){
        if(playerWinCount > computerWinCount){
            resultText.textContent='You beat the computer, humans can live in peace for one day..';
        }else if(playerWinCount < computerWinCount){
            resultText.textContent='Computer beats you, now who will save the mankind :(';
        }else{
            resultText.textContent='It\'s a tie';
        }
        playsRemaining.textContent = '';
        replay.textContent = 'Replay?';
        replay.classList.add('replay');
        playerOptions.innerHTML = '';
    }
}


// game();