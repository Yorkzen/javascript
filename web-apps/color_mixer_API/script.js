const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");
const colorMixer = document.getElementById("color-mixer");
const colorValue = document.getElementById("color-value");
const randomColorButton = document.getElementById("randomColorButton");

function updateColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;
  const color = `rgb(${red}, ${green}, ${blue})`;

  colorMixer.style.backgroundColor = color;
  colorValue.textContent = color;
}

function getRandomColor() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((data) => {
      const {
        rgb: { r, g, b },
      } = data;
      redSlider.value = r;
      greenSlider.value = g;
      blueSlider.value = b;
      updateColor();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);
randomColorButton.addEventListener("click", getRandomColor);

// Initial color values (default color)
redSlider.value = 255;
greenSlider.value = 255;
blueSlider.value = 255;

updateColor();
