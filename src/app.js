import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardSuits = ['♦', '♥', '♠', '♣'];

const getRandomIndex = (length) => {
  return Math.floor(Math.random() * length);
}

const generateRandomCard = () => {
  const suit = cardSuits[getRandomIndex(cardSuits.length)];
  const value = cardValues[getRandomIndex(cardValues.length)];
  return {
    suit,
    value
  }
}

window.generateCard = function () {
  const card = generateRandomCard();
  const topIcon = document.querySelector('.card-top-icon h1');
  const centerValue = document.querySelector('.card-number h1');
  const bottomIcon = document.querySelector('.card-footer-icon h1');

  topIcon.textContent = card.suit;
  bottomIcon.textContent = card.suit;
  centerValue.textContent = card.value;

  if (card.suit === '♥') {
    topIcon.classList.add('heart');
    bottomIcon.classList.add('heart');
  } else {
    topIcon.classList.remove('heart');
    bottomIcon.classList.remove('heart');
  }
}

window.adjustCardSize = function () {
  const width = document.getElementById("cardWidth").value;
  const height = document.getElementById("cardHeight").value;
  const cardElement = document.querySelector(".card");

  if (width) cardElement.style.width = `${width}px`;
  if (height) cardElement.style.height = `${height}px`;
}

window.onload = function () {
  setInterval(generateCard, 10000);
  generateCard();
}
