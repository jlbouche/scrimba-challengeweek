document.getElementById("btn-filter").addEventListener("click", filterDuplicates)
document.getElementById("btn-sort").addEventListener("click", sortEmojis)
document.getElementById("btn-reset-emojis").addEventListener("click", resetEmojis)

const emojis = [
    "๐","๐","๐","๐งก","๐",
    "๐ง","โก๏ธ","๐","๐ฑ","๐",
    "๐งก","๐ซ","๐","๐","โก๏ธ",
    "โก๏ธ","๐ถ","๐","๐","๐ฑ",
    "๐","๐ซ","๐","๐","๐",
    "โก๏ธ","๐","๐","๐ฑ","๐",
    "๐ซ","๐","๐","โก๏ธ","๐งก",
    "๐","๐","๐"
    ]
    
const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

for (let emoji of emojis) {
    allEmojisP.textContent += emoji
}

function resetEmojis() {
    let currentIndex = emojis.length,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [emojis[currentIndex], emojis[randomIndex]] = [
        emojis[randomIndex], emojis[currentIndex]];
    }
    allEmojisP.textContent = emojis.join('');
    
    uniqueEmojisP.textContent = "";
}

function filterDuplicates() {
    let uniqueEmojiSet = [...new Set(emojis)]
    if (uniqueEmojisP.textContent === ""){
        for (let i = 0; i < uniqueEmojiSet.length; i++){
            uniqueEmojisP.textContent += uniqueEmojiSet[i];
        }
    }
}

function sortEmojis() {
    allEmojisP.textContent = emojis.sort().join('')
}