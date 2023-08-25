const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let currentIndex = 0;

const nameDisplay = document.getElementById("name-display");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

function displayCurrentName() {
  nameDisplay.textContent = names[currentIndex];
}

function showPreviousName() {
  if (currentIndex > 0) {
    currentIndex--;
    displayCurrentName();
  }
}

function showNextName() {
  if (currentIndex < names.length - 1) {
    currentIndex++;
    displayCurrentName();
  }
}

previousButton.addEventListener("click", showPreviousName);
nextButton.addEventListener("click", showNextName);

// Initialize the display
displayCurrentName();