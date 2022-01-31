"use strict";

let randomNumber = Math.trunc(Math.random() * 20);
const number = document.querySelector(".number");
let score = document.querySelector(".score");
let scoreStart = 20;
const againButton = document.querySelector(".again");
const message = document.querySelector(".message");
const check = document.querySelector(".check");
const guess = +document.querySelector(".guess").value;
const highScoreText = document.querySelector(".highscore");
let highScore = 0;

check.addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;
  console.log(guess);
  const message = document.querySelector(".message");

  // if empty
  if (!guess) {
    message.textContent = "⛔ Не номер или ноль";
  }

  //  if right
  else if (guess === randomNumber) {
    message.textContent = "🎉 Ура вы правильно угадали!";
    number.textContent = randomNumber;
    document.querySelector("body").style.background = "#60b347";

    if (scoreStart > highScore) {
      highScore = scoreStart;
      highScoreText.textContent = scoreStart;
    }
  }

  // if more or less
  else if (guess !== randomNumber) {
    if (scoreStart > 1) {
      message.textContent = guess > randomNumber ? "Это больше" : "Это меньше";
      scoreStart--;
      score.textContent = scoreStart;
    } else {
      message.textContent = "😌 Жаль но вы проиграли";
      score.textContent = 0;
    }
  }

  // if less number
  // else if (guess < randomNumber) {
  //   if (scoreStart > 1) {
  //     message.textContent = "Это меньше";
  //     scoreStart--;
  //     score.textContent = scoreStart;
  //   } else {
  //     message.textContent = "😌 Жаль но вы проиграли";
  //     score.textContent = 0;
  //   }
  // }

  // // if more
  // else if (guess > randomNumber) {
  //   if (scoreStart > 1) {
  //     message.textContent = "Это больше";
  //     scoreStart--;
  //     score.textContent = scoreStart;
  //   } else {
  //     message.textContent = "😌 Жаль но вы проиграли";
  //     score.textContent = 0;
  //   }
  // }
});

againButton.addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20);
  scoreStart = 20;
  number.textContent = "?";
  document.querySelector("body").style.background = "";
  const guess = document.querySelector(".guess");
  score.textContent = scoreStart;
  guess.value = "";
  message.textContent = "👉 Поехали играть...";
});
