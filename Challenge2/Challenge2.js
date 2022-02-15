const greetingDisplay = document.getElementById("greeting-generic-display")
const greetingCustomDisplay = document.getElementById("greeting-custom-display");
const toDisplay = document.getElementById("to-display")
const fromDisplay = document.getElementById("from-display")
const fillForm = document.getElementById("fill-fields")

const greetingForm = document.getElementById("form")
const greetingToInput = document.getElementById("recipient-input")
const greetingFromInput = document.getElementById("sender-input")
const greetingGenericInput = document.getElementById("greeting-select")
const greetingCustomInput = document.getElementById("greeting-custom")

greetingForm.addEventListener("change", writeGreeting)

function writeGreeting() {
    if(greetingToInput.value && greetingFromInput.value && greetingGenericInput.value){    
        toDisplay.textContent = greetingToInput.value;
        fromDisplay.textContent = greetingFromInput.value;
        greetingDisplay.textContent = greetingGenericInput.value;
        greetingCustomDisplay.textContent = greetingCustomInput.value;
    } else if (greetingToInput.value && greetingFromInput.value && greetingCustomInput.value){
        toDisplay.textContent = greetingToInput.value;
        fromDisplay.textContent = greetingFromInput.value;
        greetingDisplay.textContent = greetingGenericInput.value;
        greetingCustomDisplay.textContent = greetingCustomInput.value;
    }
}