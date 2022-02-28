' use strict';

let buttonGroup = [];
let sentenceGroup = [];

const button1 = document.querySelector('.item-1');
const button2 = document.querySelector('.item-2');
const button3 = document.querySelector('.item-3');
const button4 = document.querySelector('.item-4');
const button5 = document.querySelector('.item-5');
const button6 = document.querySelector('.item-6');
const button7 = document.querySelector('.item-7');
const button8 = document.querySelector('.item-8');
const button9 = document.querySelector('.item-9');
const button10 = document.querySelector('.item-10');

buttonGroup.push(
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10
);

let image1 = document.querySelector('.modal__container-card-image-1');
let image2 = document.querySelector('.modal__container-card-image-2');
let image3 = document.querySelector('.modal__container-card-image-3');
let image4 = document.querySelector('.modal__container-card-image-4');
let image5 = document.querySelector('.modal__container-card-image-5');
let image6 = document.querySelector('.modal__container-card-image-6');
let image7 = document.querySelector('.modal__container-card-image-7');
let image8 = document.querySelector('.modal__container-card-image-8');
let image9 = document.querySelector('.modal__container-card-image-9');
let image10 = document.querySelector('.modal__container-card-image-10');

let modalContainer = document.querySelector('.modal__container');
let rules = document.querySelector('.text');

let returnButton = document.querySelector('.return-button');
let clickHereFirst = document.querySelector('.modal__container-button-2');

const modalPopDown = function () {
  modalContainer.style.zIndex = '';
  modalContainer.style.zIndex = -5;
  modalContainer.style.visibility = '';
  modalContainer.style.visibility = 'hidden';
};

returnButton.addEventListener('click', modalPopDown);

buttonGroup.forEach(function (e) {
  e.addEventListener('click', function () {
    modalContainer.style.zIndex = '';
    modalContainer.style.zIndex = 30;
    modalContainer.style.visibility = '';
    modalContainer.style.visibility = 'visible';
  });
});

button1.addEventListener('click', function () {
  image1.classList.replace('hidden', 'active');

  image2.classList.replace('active', 'hidden');
  image3.classList.replace('active', 'hidden');
  image4.classList.replace('active', 'hidden');
  image5.classList.replace('active', 'hidden');
  image6.classList.replace('active', 'hidden');
  image7.classList.replace('active', 'hidden');
  image8.classList.replace('active', 'hidden');
  image9.classList.replace('active', 'hidden');
  image10.classList.replace('active', 'hidden');
});

button2.addEventListener('click', function () {
  image2.classList.replace('hidden', 'active');

  image1.classList.replace('active', 'hidden');
  image3.classList.replace('active', 'hidden');
  image4.classList.replace('active', 'hidden');
  image5.classList.replace('active', 'hidden');
  image6.classList.replace('active', 'hidden');
  image7.classList.replace('active', 'hidden');
  image8.classList.replace('active', 'hidden');
  image9.classList.replace('active', 'hidden');
  image10.classList.replace('active', 'hidden');
});

button3.addEventListener('click', function () {
  image3.classList.replace('hidden', 'active');

  image1.classList.replace('active', 'hidden');
  image2.classList.replace('active', 'hidden');
  image4.classList.replace('active', 'hidden');
  image5.classList.replace('active', 'hidden');
  image6.classList.replace('active', 'hidden');
  image7.classList.replace('active', 'hidden');
  image8.classList.replace('active', 'hidden');
  image9.classList.replace('active', 'hidden');
  image10.classList.replace('active', 'hidden');
});

button4.addEventListener('click', function () {
  image4.classList.replace('hidden', 'active');

  image1.classList.replace('active', 'hidden');
  image2.classList.replace('active', 'hidden');
  image3.classList.replace('active', 'hidden');
  image5.classList.replace('active', 'hidden');
  image6.classList.replace('active', 'hidden');
  image7.classList.replace('active', 'hidden');
  image8.classList.replace('active', 'hidden');
  image9.classList.replace('active', 'hidden');
  image10.classList.replace('active', 'hidden');
});

button5.addEventListener('click', function () {
  image5.classList.replace('hidden', 'active');

  image1.classList.replace('active', 'hidden');
  image2.classList.replace('active', 'hidden');
  image3.classList.replace('active', 'hidden');
  image4.classList.replace('active', 'hidden');
  image6.classList.replace('active', 'hidden');
  image7.classList.replace('active', 'hidden');
  image8.classList.replace('active', 'hidden');
  image9.classList.replace('active', 'hidden');
  image10.classList.replace('active', 'hidden');
});

button6.addEventListener('click', function () {
  image6.classList.replace('hidden', 'active');

  image1.classList.replace('active', 'hidden');
  image2.classList.replace('active', 'hidden');
  image3.classList.replace('active', 'hidden');
  image4.classList.replace('active', 'hidden');
  image5.classList.replace('active', 'hidden');
  image7.classList.replace('active', 'hidden');
  image8.classList.replace('active', 'hidden');
  image9.classList.replace('active', 'hidden');
  image10.classList.replace('active', 'hidden');
});

button7.addEventListener('click', function () {
  image7.classList.replace('hidden', 'active');

  image1.classList.replace('active', 'hidden');
  image2.classList.replace('active', 'hidden');
  image3.classList.replace('active', 'hidden');
  image4.classList.replace('active', 'hidden');
  image5.classList.replace('active', 'hidden');
  image6.classList.replace('active', 'hidden');
  image8.classList.replace('active', 'hidden');
  image9.classList.replace('active', 'hidden');
  image10.classList.replace('active', 'hidden');
});

button8.addEventListener('click', function () {
  image8.classList.replace('hidden', 'active');

  image1.classList.replace('active', 'hidden');
  image2.classList.replace('active', 'hidden');
  image3.classList.replace('active', 'hidden');
  image4.classList.replace('active', 'hidden');
  image5.classList.replace('active', 'hidden');
  image6.classList.replace('active', 'hidden');
  image7.classList.replace('active', 'hidden');
  image9.classList.replace('active', 'hidden');
  image10.classList.replace('active', 'hidden');
});

button9.addEventListener('click', function () {
  image9.classList.replace('hidden', 'active');

  image1.classList.replace('active', 'hidden');
  image2.classList.replace('active', 'hidden');
  image3.classList.replace('active', 'hidden');
  image4.classList.replace('active', 'hidden');
  image5.classList.replace('active', 'hidden');
  image6.classList.replace('active', 'hidden');
  image7.classList.replace('active', 'hidden');
  image8.classList.replace('active', 'hidden');
  image10.classList.replace('active', 'hidden');
});

button10.addEventListener('click', function () {
  image10.classList.replace('hidden', 'active');

  image1.classList.replace('active', 'hidden');
  image2.classList.replace('active', 'hidden');
  image3.classList.replace('active', 'hidden');
  image4.classList.replace('active', 'hidden');
  image5.classList.replace('active', 'hidden');
  image6.classList.replace('active', 'hidden');
  image7.classList.replace('active', 'hidden');
  image8.classList.replace('active', 'hidden');
  image9.classList.replace('active', 'hidden');
});

function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(70);
  return Math.floor(Math.random() * (max - min) + min);
}

let randomNumberOne = getRandomInt(1, 70);
let randomNumberTwo = getRandomInt(1, 70);
let randomNumberThree = getRandomInt(1, 70);
let randomNumberFour = getRandomInt(1, 70);
let randomNumberFive = getRandomInt(1, 70);
let randomNumberSix = getRandomInt(1, 70);
let randomNumberSeven = getRandomInt(1, 70);
let randomNumberEight = getRandomInt(1, 70);
let randomNumberNine = getRandomInt(1, 70);
let randomNumberTen = getRandomInt(1, 70);

clickHereFirst.addEventListener('click', function () {
  if (clickHereFirst.textContent.toLowerCase() === 'rules') {
    rules.style.visibility = 'visible';
    clickHereFirst.textContent = 'hide rules';
  } else {
    rules.style.visibiliy = '';
    rules.style.visibility = 'hidden';
    clickHereFirst.textContent = 'Rules';
  }
});

image1.src = `../images/image-${getRandomInt(1, 70)}.png`;
image2.src = `../images/image-${getRandomInt(1, 70)}.png`;
image3.src = `../images/image-${getRandomInt(1, 70)}.png`;
image4.src = `../images/image-${getRandomInt(1, 70)}.png`;
image5.src = `../images/image-${getRandomInt(1, 70)}.png`;
image6.src = `../images/image-${getRandomInt(1, 70)}.png`;
image7.src = `../images/image-${getRandomInt(1, 70)}.png`;
image8.src = `../images/image-${getRandomInt(1, 70)}.png`;
image9.src = `../images/image-${getRandomInt(1, 70)}.png`;
image10.src = `../images/image-${getRandomInt(1, 70)}.png`;

document.querySelector('#oneSentence').addEventListener('submit', function (e) {
  e.preventDefault();
  sentenceGroup.push({
    text: e.target.elements.submitSentence.value,
  });

  e.target.elements.submitSentence.value = '';
});

document.querySelector('.item-11').addEventListener('click', function () {
  if (sentenceGroup.length >= 10) {
    document.querySelector('#comp-story').textContent = '';
    const p = document.createElement('p');

    sentenceGroup.forEach(function (sent) {
      p.textContent += sent.text;
    });
    document.querySelector('#comp-story').appendChild(p);
  }
});
