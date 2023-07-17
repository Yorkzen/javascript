const counter = document.getElementById("counter");
const mainArea = document.getElementById("main-area");
const resetButton = document.getElementById("resetButton");

let count = 0;

function increaseCounter() {
  count++;
  counter.textContent = count;

  if (count % 100 === 0) {
    resetBackground();
  } else {
    changeBackground();
  }
}

function resetCounter() {
  count = 0;
  counter.textContent = count;
  resetBackground();
}

function changeBackground() {
  const colorStep = Math.floor(((count % 100) * 255) / 100);
  const backgroundColor = `rgb(${colorStep}, ${colorStep}, ${colorStep})`;
  mainArea.style.backgroundColor = backgroundColor;
}

function resetBackground() {
  mainArea.style.backgroundColor = "#ffffff";
}

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", increaseCounter);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      increaseCounter();
    }
  });

  resetButton.addEventListener("click", resetCounter);
});
