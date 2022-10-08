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

