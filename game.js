function rulesToggle(){
    let display = document.getElementById("rules-div").style.display
    if (display == "block") {
        display = "none"
    }
    else {
        display = "block"
    }
    document.getElementById("rules-div").style.display = display;
}

function rulesClose(){
    document.getElementById("rules-div").style.display = "none";
}





function rockFunction(){
    document.getElementById("choose-text").style.display = "none"
    document.getElementById("game-results-div").style.display = "flex";
    document.getElementById("rock-button").disabled = true;
    document.getElementById("paper-button").disabled = true;
    document.getElementById("scissors-button").disabled = true;
    let userOption = "Rock";
    let statusDisplay = `You chose ${userOption}`;
    document.getElementById("game-status-display").innerHTML = statusDisplay;
    document.getElementById("game-div").style.animation = "game-div-spin 1s 1 linear";
    let aiPick = Math.random();
    if (aiPick < 0.67) {
        if (aiPick < 0.34) {
            aiOption = "Rock";
            document.getElementById("game-status-display").innerHTML = `${statusDisplay} and I chose ${aiOption}`;
            document.getElementById("game-output-display").innerHTML = "Draw! Play again"
        }
        else {
            aiOption = "Paper";
            document.getElementById("game-status-display").innerHTML = `${statusDisplay} and I chose ${aiOption}`;
            document.getElementById("game-output-display").innerHTML = "You've been wrapped. I win!"
        }
    }
    else {
        aiOption = "Scissors";
        document.getElementById("game-status-display").innerHTML = `${statusDisplay} and I chose ${aiOption}`;
        document.getElementById("game-output-display").innerHTML = ":-( You win!"
    }
}



function scissorsFunction(){
    document.getElementById("choose-text").style.display = "none"
    document.getElementById("game-results-div").style.display = "flex";
    document.getElementById("rock-button").disabled = true;
    document.getElementById("paper-button").disabled = true;
    document.getElementById("scissors-button").disabled = true;
    let userOption = "Scissors";
    let statusDisplay = `You chose ${userOption}`;
    document.getElementById("game-status-display").innerHTML = statusDisplay;
    document.getElementById("game-div").style.animation = "game-div-spin 1s 1 linear";
    let aiPick = Math.random();
    if (aiPick < 0.67) {
        if (aiPick < 0.34) {
            aiOption = "Rock";
            document.getElementById("game-status-display").innerHTML = `${statusDisplay} and I chose ${aiOption}`;
            document.getElementById("game-output-display").innerHTML = "Well look who's broken. I win!"
        }
        else {
            aiOption = "Paper";
            document.getElementById("game-status-display").innerHTML = `${statusDisplay} and I chose ${aiOption}`;
            document.getElementById("game-output-display").innerHTML = "I'm torn :-( You win!"
        }
    }
    else {
        aiOption = "Scissors";
        document.getElementById("game-status-display").innerHTML = `${statusDisplay} and I chose ${aiOption}`;
        document.getElementById("game-output-display").innerHTML = "Draw! Play again"
    }
}



function paperFunction(){
    document.getElementById("choose-text").style.display = "none"
    document.getElementById("game-results-div").style.display = "flex";
    document.getElementById("rock-button").disabled = true;
    document.getElementById("paper-button").disabled = true;
    document.getElementById("scissors-button").disabled = true;
    let userOption = "Paper";
    let statusDisplay = `You chose ${userOption}`;
    document.getElementById("game-status-display").innerHTML = statusDisplay;
    document.getElementById("game-div").style.animation = "game-div-spin 1s 1 linear";
    let aiPick = Math.random();
    if (aiPick < 0.67) {
        if (aiPick < 0.34) {
            aiOption = "Rock";
            document.getElementById("game-status-display").innerHTML = `${statusDisplay} and I chose ${aiOption}`;
            document.getElementById("game-output-display").innerHTML = "It's a wrap. You win!"
        }
        else {
            aiOption = "Paper";
            document.getElementById("game-status-display").innerHTML = `${statusDisplay} and I chose ${aiOption}`;
            document.getElementById("game-output-display").innerHTML = "Draw! Play again"
        }
    }
    else {
        aiOption = "Scissors";
        document.getElementById("game-status-display").innerHTML = `${statusDisplay} and I chose ${aiOption}`;
        document.getElementById("game-output-display").innerHTML = "I win! Don't worry, you'll be fine..."
    }
}

function resetFunction(){
    document.getElementById("choose-text").style.display = "block"
    document.getElementById("game-results-div").style.display = "none";
    document.getElementById("rock-button").disabled = false;
    document.getElementById("paper-button").disabled = false;
    document.getElementById("scissors-button").disabled = false;
    document.getElementById("game-status-display").innerHTML = "";
    document.getElementById("game-output-display").innerHTML = ""
    document.getElementById("game-div").style.animation = "";
}