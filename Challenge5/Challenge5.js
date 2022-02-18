const body = document.body
const heart = document.querySelector(".heart").style
document.getElementById("btn").addEventListener("click", changeColor)

async function changeColor() {
    const apiUrl = await fetch("https://apis.scrimba.com/hexcolors/?count=2")
    let data = await apiUrl.json()
    let color1 = data.colors[0];
    let color2 = data.colors[1];
    body.style.backgroundColor = color1.value;
    heart.setProperty('--heart-color', color2.value)
}
