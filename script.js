' use strict';

let buttonGroup = [];
let imageGroup = [];
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

const image1 = document.querySelector('.modal__container-card-image-1');
const image2 = document.querySelector('.modal__container-card-image-2');
const image3 = document.querySelector('.modal__container-card-image-3');
const image4 = document.querySelector('.modal__container-card-image-4');
const image5 = document.querySelector('.modal__container-card-image-5');
const image6 = document.querySelector('.modal__container-card-image-6');
const image7 = document.querySelector('.modal__container-card-image-7');
const image8 = document.querySelector('.modal__container-card-image-8');
const image9 = document.querySelector('.modal__container-card-image-9');
const image10 = document.querySelector('.modal__container-card-image-10');

imageGroup.push(
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10
);

let modalContainer = document.querySelector('.modal__container');
let rules = document.querySelector('.text');

let returnButton = document.querySelector('.return-button');
let clickHereFirst = document.querySelector('.modal__container-button-2');
let cardImage = document.querySelector('.modal__container-card-image');
let image = document.getElementById('#modal__container-card-image');

const modalPopDown = function () {
  modalContainer.style.zIndex = '';
  modalContainer.style.zIndex = -5;
  modalContainer.style.visibility = '';
  modalContainer.style.visibility = 'hidden';
};

function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(70);
  return Math.floor(Math.random() * (max - min) + min);
}

button2.addEventListener('click', function () {
  document
    .querySelector('.modal__container-card-image-1')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-3')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-4')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-5')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-6')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-7')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-8')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-9')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-10')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-2')
    .classList.replace('hidden', 'active');
});

button3.addEventListener('click', function () {
  document
    .querySelector('.modal__container-card-image-1')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-2')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-4')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-5')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-6')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-7')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-8')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-9')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-10')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-3')
    .classList.replace('hidden', 'active');
});

button4.addEventListener('click', function () {
  document
    .querySelector('.modal__container-card-image-1')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-2')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-3')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-5')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-6')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-7')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-8')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-9')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-10')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-4')
    .classList.replace('hidden', 'active');
});

button5.addEventListener('click', function () {
  document
    .querySelector('.modal__container-card-image-1')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-2')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-3')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-4')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-6')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-7')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-8')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-9')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-10')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-5')
    .classList.replace('hidden', 'active');
});

button6.addEventListener('click', function () {
  document
    .querySelector('.modal__container-card-image-1')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-2')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-3')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-4')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-5')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-7')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-8')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-9')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-10')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-6')
    .classList.replace('hidden', 'active');
});

button7.addEventListener('click', function () {
  document
    .querySelector('.modal__container-card-image-1')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-2')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-3')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-4')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-5')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-6')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-8')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-9')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-10')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-7')
    .classList.replace('hidden', 'active');
});

button8.addEventListener('click', function () {
  document
    .querySelector('.modal__container-card-image-1')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-2')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-3')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-4')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-5')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-6')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-7')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-9')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-10')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-8')
    .classList.replace('hidden', 'active');
});

button9.addEventListener('click', function () {
  document
    .querySelector('.modal__container-card-image-1')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-2')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-3')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-4')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-5')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-6')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-7')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-8')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-10')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-9')
    .classList.replace('hidden', 'active');
});

button10.addEventListener('click', function () {
  document
    .querySelector('.modal__container-card-image-1')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-2')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-3')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-4')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-5')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-6')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-7')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-8')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-9')
    .classList.replace('active', 'hidden');
  document
    .querySelector('.modal__container-card-image-10')
    .classList.replace('hidden', 'active');
});

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

buttonGroup.forEach(function (e) {
  e.addEventListener('click', function () {
    modalContainer.style.zIndex = '';
    modalContainer.style.zIndex = 30;
    modalContainer.style.visibility = '';
    modalContainer.style.visibility = 'visible';
    // e.textContent = 'checked';
  });
});

returnButton.addEventListener('click', modalPopDown);

document
  .querySelector('.modal__container-button-2')
  .addEventListener('click', function () {
    if (clickHereFirst.textContent.toLowerCase() == 'rules') {
      rules.style.visibility = '';
      rules.style.visibility = 'visible';
      clickHereFirst.textContent = 'hide rules';
    } else {
      rules.style.visibiliy = '';
      rules.style.visibility = 'hidden';
      clickHereFirst.textContent = 'Rules';
    }
  });

document.getElementById(
  'modal__container-card-image-1'
).src = `../images/image-${randomNumberOne}.png`;

document.getElementById(
  'modal__container-card-image-2'
).src = `../images/image-${randomNumberTwo}.png`;

document.getElementById(
  'modal__container-card-image-3'
).src = `../images/image-${randomNumberThree}.png`;

document.getElementById(
  'modal__container-card-image-4'
).src = `../images/image-${randomNumberFour}.png`;

document.getElementById(
  'modal__container-card-image-5'
).src = `../images/image-${randomNumberFive}.png`;

document.getElementById(
  'modal__container-card-image-6'
).src = `../images/image-${randomNumberSix}.png`;

document.getElementById(
  'modal__container-card-image-7'
).src = `../images/image-${randomNumberSeven}.png`;

document.getElementById(
  'modal__container-card-image-8'
).src = `../images/image-${randomNumberEight}.png`;

document.getElementById(
  'modal__container-card-image-9'
).src = `../images/image-${randomNumberNine}.png`;

document.getElementById(
  'modal__container-card-image-10'
).src = `../images/image-${randomNumberTen}.png`;

document.querySelector('#oneSentence').addEventListener('submit', function (e) {
  e.preventDefault();
  sentenceGroup.push({
    text: e.target.elements.submitSentence.value,
  });

  // }); POSSIBLY PUT THIS INTO IT'S OWN FUNCTION THAT RUNS WHEN BUTTON 10 IS CLICKED

  e.target.elements.submitSentence.value = '';
  console.log(sentenceGroup);
});

document.querySelector('.item-11').addEventListener('click', function () {
  if (sentenceGroup.length >= 10) {
    document.querySelector('#comp-story').textContent = '';
    const p = document.createElement('p');
    sentenceGroup.forEach(function (sent) {
      p.textContent += sent.text;
      console.log(p);
    });
    document.querySelector('#comp-story').appendChild(p);
  }
});

