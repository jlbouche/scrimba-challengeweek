document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")

function calculate() {
    let foodTotal = parseInt(document.getElementById('food-select').value)
    let transportTotal = parseInt(document.getElementById('transport-select').value)
    let balloons = document.getElementById('balloon-checkbox')     
    
    if (Number.isInteger(foodTotal) && Number.isInteger(transportTotal)){
        let totalCost = foodTotal + transportTotal;
        return (balloons.checked) ? ((totalCost += 2) && (costEl.textContent = `$${totalCost}`)) : (costEl.textContent = `$${totalCost}`)
    } else {
        costEl.textContent = 'Please select both food and transport.'
    }
}
 