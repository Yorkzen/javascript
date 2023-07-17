function updateDigitalClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const digitalClock = document.getElementById("digital-clock");
  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateAnalogClock() {
  const now = new Date();
  const milliseconds = now.getMilliseconds();
  const seconds = now.getSeconds() + milliseconds / 1000; // Include fractional seconds
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const hourHand = document.querySelector(".hour-hand");

  const secondRotation = (seconds / 60) * 360;
  const minuteRotation = ((minutes * 60 + seconds) / 3600) * 360;
  const hourRotation = ((hours * 3600 + minutes * 60 + seconds) / 43200) * 360;

  secondHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${secondRotation}deg)`;
  minuteHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${minuteRotation}deg)`;
  hourHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${hourRotation}deg)`;
}

setInterval(updateDigitalClock, 1000);
setInterval(updateAnalogClock, 10); // Update more frequently to include fractional seconds
