function changeTitle() {
  if (document.title === "<3?") {
    document.title = "</3?";
  } else {
    document.title = "<3?";
  }
}

let interval;
function startChangingTitle() {
  interval = setInterval(changeTitle, 1000);
}
startChangingTitle();

const buttonNo = document.getElementById("button-no");
const button = document.querySelector(".button");

function ily() {
  document.title = "<3";
  document.getElementById("sticker").src = "assets/sticker_yes.gif";
  title.style.color = "#c3aed6";
  document.getElementById("title").innerHTML = "❤";
  document.getElementById("wrapper").style.opacity = "0";
  button.style.cursor = "default";
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function buttonMove() {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  buttonNo.style.transform =
    "translate(" + randomInt(1, 200) + "px," + randomInt(1, 200) + "px)";
}

function friend() {
  document.title = "</3?";
  document.getElementById("sticker").src = "assets/sticker_no.gif";
  title.style.color = "#c3aed6";
  document.getElementById("title").innerHTML = "💔";
  document.getElementById("wrapper").style.opacity = "0";
  button.style.cursor = "default";
}
