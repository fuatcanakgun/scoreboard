function homeScore1() {
    score = document.getElementById("home-scr").textContent
    score = Number(score)
    score += 1
    document.getElementById("home-scr").textContent = score
}

function homeScore2() {
    score = document.getElementById("home-scr").textContent
    score = Number(score)
    score += 2
    document.getElementById("home-scr").textContent = score
}

function homeScore3() {
    score = document.getElementById("home-scr").textContent
    score = Number(score)
    score += 3
    document.getElementById("home-scr").textContent = score
}

function guestScore1() {
    score = document.getElementById("guest-scr").textContent
    score = Number(score)
    score += 1
    document.getElementById("guest-scr").textContent = score
}

function guestScore2() {
    score = document.getElementById("guest-scr").textContent
    score = Number(score)
    score += 2
    document.getElementById("guest-scr").textContent = score
}

function guestScore3() {
    score = document.getElementById("guest-scr").textContent
    score = Number(score)
    score += 3
    document.getElementById("guest-scr").textContent = score
}

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function new_game() {
    totalSeconds = 0
    document.getElementById("guest-scr").textContent = 0
    document.getElementById("home-scr").textContent = 0
    document.getElementById("minutes").textContent = "00"
    document.getElementById("seconds").textContent = "00"
}