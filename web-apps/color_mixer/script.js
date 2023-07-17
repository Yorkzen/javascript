const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");
const colorMixer = document.getElementById("color-mixer");
const colorValue = document.getElementById("color-value");

function updateColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;
  const color = `rgb(${red}, ${green}, ${blue})`;

  colorMixer.style.backgroundColor = color;
  colorValue.textContent = color;
}

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

// Initial color values (default color)
redSlider.value = 255;
greenSlider.value = 255;
blueSlider.value = 255;

updateColor();
