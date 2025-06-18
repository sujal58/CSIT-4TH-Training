const board = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");

const icons = ["🍎", "🚗", "🐶", "⚽", "🎵", "🍕", "📚", "🌟"];
let cards = [...icons, ...icons]; // duplicate for pairs
cards = shuffle(cards);

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createCard(icon) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.icon = icon;
  card.textContent = "";
  card.addEventListener("click", () => flipCard(card));
  return card;
}

function flipCard(card) {
  if (
    lockBoard ||
    card.classList.contains("flipped") ||
    card.classList.contains("matched")
  )
    return;

  card.textContent = card.dataset.icon;
  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lockBoard = true;
  moves++;
  scoreDisplay.textContent = `Moves: ${moves}`;

  if (firstCard.dataset.icon === secondCard.dataset.icon) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchedPairs++;
    resetFlip();
    if (matchedPairs === icons.length) {
      setTimeout(() => alert(`🎉 You won in ${moves} moves!`), 300);
    }
  } else {
    setTimeout(() => {
      firstCard.textContent = "";
      secondCard.textContent = "";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetFlip();
    }, 1000);
  }
}

function resetFlip() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

function startGame() {
  board.innerHTML = "";
  cards.forEach((icon) => {
    const card = createCard(icon);
    board.appendChild(card);
  });
}

startGame();
