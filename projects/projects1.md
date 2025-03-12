# Project Related to DOM

## Project Link
[click here](https://fuzzy-space-eureka-g4rgjp5qq9x5cpgv5.github.dev/)

# Solution code

## Project 1 Solution code (bgChanger)
```Javascript

console.log('Alen');
 const buttons = document.querySelectorAll('.button');
 const body = document.querySelector("body");

 buttons.forEach(function(button){
   console.log(button);
   button.addEventListener('click',function(e){
          console.log(e);
          console.log(e.target);
          if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            document.title.backgroundColor = 'blue';
          }
          else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
          }
          else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
          }
          else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
          }
          else if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
          }
          
          
   });
 });


```

## Project 2 Solution code (BMI Calculator)

```Javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter valid ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(height)) {
    results.innerHTML = `Plaese enter valid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}.You are under weight</span>`;
    }
    if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>${bmi}.Noramal range</span>`;
    }
    if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi}.You are overweight</span>`;
    }
  }
});


```

## Project 3 Solution Code (Display time)
```javascript

const clock = document.getElementById('clock');

const date = new Date();

setInterval(function () {
  const date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## Project 4 Solution code (Guess the Nubmer)

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas ');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more then 1');
  } else if (guess > 100) {
    alert('Please enter a number less then 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over.Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess); //to check weather guess was correct or not
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too Heigh`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  console.log(message);
  //this is the diff b/w innerHTML and textContent,
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2>Start new Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild('p');
    playGame = true;
  });
}

````