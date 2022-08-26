/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "My fish", "The cat"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when i finished",
  "during my lunch"
];

window.onload = function() {
  let firstString = who[Math.floor(Math.random() * who.length)];
  let secondString = action[Math.floor(Math.random() * action.length)];
  let thirdString = what[Math.floor(Math.random() * what.length)];
  let fourthString = when[Math.floor(Math.random() * when.length)];
  document.getElementById(
    "excuse"
  ).innerHTML = `${firstString} ${secondString} ${thirdString} ${fourthString}`;
};
