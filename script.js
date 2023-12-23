const display = document.getElementById("display");
const keys = document.getElementById("keys");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR press AC";
  }
}

function deDisplay() {
  display.value = display.value.toString().slice(0, -1);
}

function appendToA() {

    display.value = 'Made by Akash';
    window.location.href = "https://www.linkedin.com/in/akash-balasaheb-borude/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BaqsDSWfNQUSGZ4Om73kkeg%3D%3D"; 

}

//event lisenor

// Function to handle key presses
function handleKeyPress(event) {
    // Get the pressed key
    const key = event.key;

    // Check if the pressed key is a number or symbol
    if (/[\d+\-*/.]/.test(key)) {
        // Do something with the pressed key, e.g., update the calculator display
        if (key === "Enter") {
            calculate();
        } else {
            // For other keys, update the display
            updateDisplay(key);
        }
    }
}

// Function to update the calculator display
function updateDisplay(value) {
    // Add your logic to update the display based on the pressed key
    document.getElementById("display").value += value;
}

// Add event listener to the whole document to detect key presses
document.addEventListener('keydown', handleKeyPress);
