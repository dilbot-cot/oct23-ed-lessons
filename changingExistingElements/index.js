function addEventListeners() {
  // Don't Change this function.
  let darkModeButton = document.getElementById("dark-mode");
  let lightModeButton = document.getElementById("light-mode");
  // When the buttons are clicked, they call the respective function
  darkModeButton.addEventListener("click", changeToDarkMode);
  lightModeButton.addEventListener("click", changeToLightMode);
}

function changeToDarkMode() {
  // Modify the body's class list to change the page to dark mode
  let turnDarkModeOn = document.querySelector("body");
  turnDarkModeOn.classList.add("darkmode");
}

function changeToLightMode() {
  // Modify the body's class list to change the page to light mode
  let turnDarkModeOff = document.querySelector("body");
  turnDarkModeOff.classList.remove("darkmode");
}

function changeBulletsToSquares() {
  // Change the bullet cirlces to squares
  let ul = document.querySelector("ul");
  ul.style.listStyleType = "square";
}

function changeFontSizeAndColour() {
  // Change the body font styles
  let bodyText = document.querySelector("body");
  bodyText.style.fontFamily = "Arial";
  bodyText.style.fontSize = "28px";
  
}

// Do not change this function
function activity() {
  addEventListeners();
  changeBulletsToSquares();
  changeFontSizeAndColour();
}

try {
  module.exports = {
    changeToDarkMode,
    changeToLightMode,
    changeBulletsToSquares,
    changeFontSizeAndColour,
  };
} catch {}

