document.getElementById("btn").addEventListener("click", correct)
const displayText = document.getElementById("display")
const inputText = document.getElementById("custom-input")

function correct() {
    if (inputText.value){
        let arrFromString = inputText.value.split(" ")
        let newArr = arrFromString.map(elem => {
            return elem.charAt(0).toUpperCase() + elem.substring(1).toLowerCase()
        })
        displayText.textContent = newArr.join(" ");
    } else {
        let displayArr = displayText.textContent.toLowerCase().split(' ')
        let newDisplayArr = displayArr.map(elem => {
            return elem.charAt(0).toUpperCase() + elem.substring(1).toLowerCase()
        })
        displayText.textContent = newDisplayArr.join(" ");
    }
}
