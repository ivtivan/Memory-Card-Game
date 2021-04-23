const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = (firstCard.getElementsByTagName('img')[0].alt === secondCard.getElementsByTagName('img')[0].alt);
  if (isMatch) {
    disableCards();
  } 
  else {
    setTimeout(unflipCards, 1000);
  }
}

function reset() {
  firstCard = null;
  secondCard = null;
  hasFlippedCard = false;
}

function unflipCards() {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  reset();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  reset();
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));