let choices = ['r', 'p', 's'];
let cpuScore = 0;
let playerScore = 0;
let result = "";


function updateScore()
{
    userScore.innerHTML = playerScore;
    compScore.innerHTML = cpuScore;
}

for (const elem of document.getElementsByClassName('choice'))
{
    elem.addEventListener('click', () =>
    {
        let userChoice = elem.id;
        let compChoice = choices[Math.floor(Math.random() * 3)];
        checkWinner(userChoice, compChoice);
    });
}

function checkWinner(userChoice, compChoice)
{
    if (userChoice === compChoice)
    {
        result = "The game was a draw try again";
    }
    else if (userChoice == 'r')
    {
        if (compChoice == 'p')
        {
            lose();
        }
        else if (compChoice == 's')
        {
            win();
        }
    }
    else if (userChoice == 'p')
    {
        if (compChoice == 's')
        {
            lose();
        }
        else if (compChoice == 'r')
        {
            win();
        }
    }
    else if (userChoice == 's')
    {
        if (compChoice == 'r')
        {
            lose();
        }
        else if (compChoice == 'p')
        {
            win();
        }
    }
    resultText.innerHTML = "Computer chose: " + compChoice.toUpperCase() + " . " + result + "!!";
}

function win()
{
    result = "You win";
    playerScore += 1;
    updateScore();
}

function lose()
{
    result = "You lose";
    cpuScore += 1;
    updateScore();
}