const nodes = [
    'Black Box', 'Black Box',
    'Router', 'Router',
    'Satellite', 'Satellite',
    'Node', 'Node'
];

let flippedCards = [];
let matchedCards = [];
let moves = 0;

const gameBoard = document.getElementById('game-board');
const movesDisplay = document.getElementById('moves');
const resultMessage = document.getElementById('result-message');
const resetBtn = document.getElementById('reset-btn');

// Shuffle nodes
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize game
function initGame() {
    gameBoard.innerHTML = '';
    flippedCards = [];
    matchedCards = [];
    moves = 0;
    movesDisplay.textContent = moves;
    resultMessage.textContent = '';

    const shuffledNodes = shuffle([...nodes]);
    shuffledNodes.forEach((node, index40) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = node;
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });
}

// Flip card logic
function flipCard(card) {
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !card.classList.contains('matched')) {
        card.classList.add('flipped');
        card.textContent = card.dataset.value;
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            moves++;
            movesDisplay.textContent = moves;
            checkMatch();
        }
    }
}

// Check for match
function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
        flippedCards = [];
        if (matchedCards.length === nodes.length) {
            resultMessage.textContent = `Network Connected! You won in ${moves} moves!`;
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
            flippedCards = [];
        }, 1000);
    }
}

// Reset game
resetBtn.addEventListener('click', initGame);

// Start game
initGame();
