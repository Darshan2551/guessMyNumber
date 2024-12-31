"use strict";
/*
document.querySelector(".message").textContent = "🎉 Correct number 🎊";

console.log(document.querySelector(".message").textContent);

document.querySelector(".highest").textContent = 2;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector(".score").textContent);
console.log(secretNumber);
let input = document
  .querySelector(".calculate")
  .addEventListener("click", function () {
    const input = parseInt(document.querySelector(".input").value);
    if (isNaN(input) || input <= 0) {
      document.querySelector(".message").textContent = "Error! NAN";
    } else if (secretNumber === input) {
      document.querySelector(".message").textContent = "🎉 Correct Number 🎉";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".highest").textContent = score;
    } else if (input > secretNumber) {
      document.querySelector(".message").textContent = "To High📈";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else if (input < secretNumber) {
      document.querySelector(".message").textContent = "To Low📉";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    }
  });

let reset = document
  .querySelector(".reset")
  .addEventListener("click", function () {
    score = 20;
    document.querySelector(".score").textContent = score;
    // document.querySelector(".highest").textContent = 0;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".input").value = "";
    document.querySelector(".message").textContent = "Start guessing.....";
  });
