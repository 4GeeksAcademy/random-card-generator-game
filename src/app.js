import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardSuits = ['♦', '♥', '♠', '♣'];

//player

window.player = {
   topIcon : document.querySelector('.card-top-icon h1'),
   centerValue : document.querySelector('.card-number h1'),
   bottomIcon : document.querySelector('.card-footer-icon h1'),
};

window.pc ={
   topIcon : document.getElementById('pcCardTop'),
   centerValue : document.getElementById('pcCardNumber'),
   bottomIcon : document.getElementById('pcCardBot'),
}
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
//carta al jugador.
window.generateCard = function (player) {
  const card = generateRandomCard();
    player.topIcon.textContent = card.suit;
  player.bottomIcon.textContent = card.suit;
  player.centerValue.textContent = card.value;

  if (card.suit === '♥') {
    topIcon.classList.add('heart');
    bottomIcon.classList.add('heart');
  } else {
    topIcon.classList.remove('heart');
    bottomIcon.classList.remove('heart');
  }
}


// window.adjustCardSize = function () {
//   const width = document.getElementById("cardWidth").value;
//   const height = document.getElementById("cardHeight").value;
//   const cardElement = document.querySelector(".card");

//   if (width) cardElement.style.width = `${width}px`;
//   if (height) cardElement.style.height = `${height}px`;
// }

window.onload = function () {
  setInterval(generateCard(pc), 1000);
  console.log(generateCard(pc));
  generateCard(pc);
}
