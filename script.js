let scissorBtn = document.getElementById('scissor');
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('player-computer');

function updateDisplay(score) {
  console.log(score);
  if (score !== null || score !== undefined) {
    playerScore.innerHTML = score.player;
    computerScore.innerHTML = score.computer;
  } else {
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
  }
}
function findScore() {
  let score = localStorage.getItem('score');
  if (score == null || score == undefined) {
    score = {
      player: 0,
      computer: 0,
    };
  } else {
    score = JSON.parse(score);
  }
  localStorage.setItem('score', JSON.stringify(score));
  updateDisplay(score);
  return score;
}

function playAgain() {
  let gameDiv = document.getElementById('game');
  let resultDiv = document.getElementById('results');
  let winnerBtn = document.getElementById('next-btn');
  winnerBtn.style.display = 'none';
  resultDiv.style.display = 'none';
  gameDiv.style.display = 'block';
}

function startGame(input) {
  let score = findScore();
  let userChoice = input;
  let computerChoice = getComputerChoice();
  let playerandComputerChoice = {
    user: userChoice,
    computer: computerChoice,
  };

  console.log(userChoice, computerChoice);

  if (userChoice == 'scissor') {
    if (computerChoice == 'rock') {
      score.computer++;
      playerandComputerChoice.winner = 'Computer';
      announceResults(playerandComputerChoice);
      // console.log('Computer wins!');
    } else if (computerChoice == 'paper') {
      score.player++;
      playerandComputerChoice.winner = 'User';
      announceResults(playerandComputerChoice);
      // console.log('User wins!');
    } else {
      playerandComputerChoice.winner = 'Tie';
      announceResults(playerandComputerChoice);
      console.log('It is a tie!');
    }
  } else if (userChoice == 'rock') {
    if (computerChoice == 'paper') {
      score.computer++;
      playerandComputerChoice.winner = 'Computer';
      announceResults(playerandComputerChoice);
      // console.log('Computer wins!');
    } else if (computerChoice == 'scissor') {
      score.player++;
      playerandComputerChoice.winner = 'User';
      announceResults(playerandComputerChoice);
      console.log('User wins!');
    } else {
      playerandComputerChoice.winner = 'Tie';
      announceResults(playerandComputerChoice);
      console.log('It is a tie!');
    }
  } else if (userChoice == 'paper') {
    if (computerChoice == 'scissor') {
      score.computer++;
      playerandComputerChoice.winner = 'Computer';
      announceResults(playerandComputerChoice);
      console.log('Computer wins!');
    } else if (computerChoice == 'rock') {
      score.player++;
      playerandComputerChoice.winner = 'User';
      announceResults(playerandComputerChoice);
      console.log('User wins!');
    } else {
      playerandComputerChoice.winner = 'Tie';
      announceResults(playerandComputerChoice);
      console.log('It is a tie!');
    }
  }
  localStorage.setItem('score', JSON.stringify(score));
  playerScore.innerHTML = score.player;
  computerScore.innerHTML = score.computer;
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return 'scissor';
  } else if (randomNumber == 1) {
    return 'rock';
  } else {
    return 'paper';
  }
}
function announceResults(details) {
  let resultDiv = document.getElementById('results');
  let playerPicked = document.getElementById('player-picked');
  let computerPicked = document.getElementById('pc-picked');
  let resultAnnouncement = document.getElementById('result-announcement');
  let gameDiv = document.getElementById('game');
  let userPickImage = document.getElementById('user-pick-img');
  let computerPickImage = document.getElementById('pc-pick-img');
  let userPickedDiv = document.getElementById('user-pick');
  let computerPickedDiv = document.getElementById('house-pick');
  let winnerBtn = document.getElementById('next-btn');

  if (resultDiv.style.display == 'none') {
    resultDiv.style.display = 'block';
  }

  gameDiv.style.display = 'none';
  resultDiv.style.display = 'block';
  if (details.user == 'scissor') {
    userPickImage.src = './images/scissor.png';
    userPickedDiv.style.borderColor = '#bd00ff';
  } else if (details.user == 'rock') {
    userPickImage.src = './images/rock.png';
    userPickedDiv.style.borderColor = '#0074b6';
  } else {
    userPickImage.src = './images/hand.png';
    userPickedDiv.style.borderColor = '#ffa943';
  }
  if (details.computer == 'scissor') {
    computerPickImage.src = './images/scissor.png';
    computerPickedDiv.style.borderColor = '#bd00ff';
  } else if (details.computer == 'rock') {
    computerPickImage.src = './images/rock.png';
    computerPickedDiv.style.borderColor = '#0074b6';
  } else {
    computerPickImage.src = './images/hand.png';
    computerPickedDiv.style.borderColor = '#ffa943';
  }

  playerPicked.innerHTML = details.user;
  computerPicked.innerHTML = details.computer;
  if (details.winner == 'User') {
    resultAnnouncement.innerHTML = 'You win! <br> Against PC';
    winnerBtn.style.display = 'inline-block';
  } else if (details.winner == 'Computer') {
    resultAnnouncement.innerHTML = 'You Lose! <br> Against PC';
  } else {
    resultAnnouncement.innerHTML = 'It is a tie!';
  }
  resultAnnouncement.style.display = 'block';
}
function rules() {
  let rulesDiv = document.getElementById('rulesDiv');
  rulesDiv.style.display = 'block';
}
findScore();

function onClose() {
  let rulesDiv = document.getElementById('rulesDiv');
  rulesDiv.style.display = 'none';
}

function next() {
  let winnerBtn = document.getElementById('next-btn');
  winnerBtn.style.display = 'none';
  window.location.href = 'result.html';
}
