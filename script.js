const choices = document.querySelectorAll('#choices img');
const result = document.getElementById('result');
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');

let userWins = 0;
let computerWins = 0;

// Attach click event using for...of loop
for (let choice of choices) {
    choice.addEventListener('click', handleClick);
  }
  
  // Handle user choice
  function handleClick(e) {
    const userChoice = e.target.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);
    showResult(winner, userChoice, computerChoice);
  }

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function getWinner(user, comp) {
    if (user === comp) return 'draw';
    if (
        (user === 'rock' && comp === 'scissors') ||
        (user === 'paper' && comp === 'rock') ||
        (user === 'scissors' && comp === 'paper')
    ) return 'user';
    return 'computer';
}

function showResult(winner, user, comp) {
    if (winner === 'user') {
        userWins++;
        result.textContent = `You Win! ${user} beats ${comp}`;
        result.className = 'text-green-700 bg-green-100 border border-green-300 text-2xl font-semibold p-4 rounded-xl ';
    } else if (winner === 'computer') {
        computerWins++;
        result.textContent = `You Lose! ${comp} beats ${user}`;
        result.className = 'text-red-700 bg-red-100 border border-red-300 text-2xl font-semibold p-4 rounded-xl ';
    } else {
        result.textContent = `It's a Draw! You both chose ${user}`;
        result.className = 'text-blue-700 bg-blue-100 border border-blue-300 text-2xl font-semibold p-4 rounded-xl ';
    }

    userScore.textContent = userWins;
    computerScore.textContent = computerWins;
}


// const choices = document.querySelectorAll('#img')