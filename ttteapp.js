let cells = document.querySelectorAll(".row > div");
const whoWin = document.querySelector(".winner");
let gameActive = true;
// let playerOne = "X";
// let playerTwo = "O";
let currentPlayer = "X";
let unPlayed = ["", "", "", "", "", "", "", "", ""];
let drawMessage = document.querySelector(".winner");
let moves = 0;
let gameOver = false;
// Index positions will make the game logic work.

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked, { once: true });
}

function cellClicked() {
  moves++;
  console.log(moves);
  event.target.textContent = currentPlayer;

  if (moves > 2) {
    winningPlayer();
  }

  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  if (moves === 9) {
    drawMessage.textContent = "Draw!";
    gameOver = true;
  }
  /* if (!unPlayed[j]) {
    unPlayed[j] = currentPlayer;
    console.log(unPlayed[j]);
  } else {
   // currentPlayer = currentPlayer === playerTwo ? playerOne : playerTwo;
    if (winningPlayer()) {
      whoWin.textContent = currentPlayer + "wins";
      return;
    } 
  }*/
}

let winningPlayer = () => {
  if (cells[0].textContent === currentPlayer) {
    if (
      cells[1].textContent === currentPlayer &&
      cells[2].textContent === currentPlayer
    ) {
      whoWin.textContent = `${currentPlayer} wins`;
      gameOver = true;
    }
    if (
      cells[3].textContent === currentPlayer &&
      cells[6].textContent === currentPlayer
    ) {
      whoWin.textContent = `${currentPlayer} wins`;
      gameOver = true;
    }
    if (
      cells[4].textContent === currentPlayer &&
      cells[8].textContent === currentPlayer
    ) {
      whoWin.textContent = `${currentPlayer} wins`;
      gameOver = true;
    }
  } else if (
    cells[1].textContent === currentPlayer &&
    cells[4].textContent === currentPlayer &&
    cells[7].textContent === currentPlayer
  ) {
    whoWin.textContent = `${currentPlayer} wins`;
    gameOver = true;
  } else if (cells[2].textContent === currentPlayer) {
    if (
      cells[5].textContent === currentPlayer &&
      cells[8].textContent === currentPlayer
    ) {
      whoWin.textContent = `${currentPlayer} wins`;
      gameOver = true;
    }
    if (
      cells[4].textContent === currentPlayer &&
      cells[6].textContent === currentPlayer
    ) {
      whoWin.textContent = `${currentPlayer} wins`;
      gameOver = true;
    }
  } else if (
    cells[3].textContent === currentPlayer &&
    cells[4].textContent === currentPlayer &&
    cells[5].textContent === currentPlayer
  ) {
    whoWin.textContent = `${currentPlayer} wins`;
    gameOver = true;
  } else if (
    cells[6].textContent === currentPlayer &&
    cells[7].textContent === currentPlayer &&
    cells[8].textContent === currentPlayer
  ) {
    whoWin.textContent = `${currentPlayer} wins`;
    gameOver = true;
  }
};

if (gameOver === true) {
    for (let i = 0; i <cells.length; i++) {
        
    }
  
}

// cells[0, 1, 2].textContent === playerOne ||
// cells[0, 3, 6].textContent === playerOne ||
// cells[0, 4, 8].textContent === playerOne ||
// cells[1, 4, 7].textContent === playerOne ||
// cells[2, 5, 8].textContent === playerOne ||
// cells[2, 4, 6].textContent === playerOne ||
// cells[3, 4, 5].textContent === playerOne ||
// cells[6, 7, 8].textContent === playerOne
