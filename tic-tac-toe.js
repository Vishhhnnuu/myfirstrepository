const board = document.getElementById('board');
const statusText = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

let currentPlayer = 'X';
let gameActive = true;
let cells = ['', '', '', '', '', '', '', '', ''];

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

function createBoard() {
  board.innerHTML = '';
  cells.forEach((cell, index) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.dataset.index = index;
    div.textContent = cell;
    div.addEventListener('click', handleCellClick);
    board.appendChild(div);
  });
}

function handleCellClick(e) {
  const index = e.target.dataset.index;
  if (cells[index] !== '' || !gameActive) return;

  cells[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner()) {
    statusText.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (cells.every(cell => cell !== '')) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  return winningCombos.some(combo => {
    return combo.every(index => cells[index] === currentPlayer);
  });
}

resetBtn.addEventListener('click', () => {
  currentPlayer = 'X';
  cells = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  statusText.textContent = "Player X's turn";
  createBoard();
});

createBoard();


