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

function playerSelection(){
    let result = prompt("Type 'rock', 'paper' or 'scissors' in the box below").toLowerCase();
    let noError = true;
    while(noError){
        if(result != 'rock' && result != 'paper' && result != 'scissors'){
            result = prompt("Enter only 'rock', 'paper' or 'scissors'");
        }else{
            noError = false;
        }
    }
    return result;
}

function playRound(playerSelection, computerSelection){
    // console.log(computerSelection, playerSelection)
    if(playerSelection == 'rock' && computerSelection == 'scissors' || 
    playerSelection == 'paper' && computerSelection == 'rock' || 
    playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'player win';
    }else if(computerSelection == 'rock' && playerSelection == 'scissors' || 
    computerSelection == 'paper' && playerSelection == 'rock' || 
    computerSelection == 'scissors' && playerSelection == 'paper'){
        return 'Computer win';
    }else{
        return "It's a tie";
    }
}

// alert(playRound(playerSelection(), getComputerChoice()));

