let resText = document.querySelector('.resText')
resText.textContent = "Canvas resolution: "

let blockCount;
let chooseBtn = document.querySelector('.chooseSizeBtn')
chooseBtn.addEventListener('click', setSize)

function setSize() {
    let temp = parseInt(prompt("Set the numbers of blocks per side: ", 16))
    if (isNaN(temp)) {
        alert("Enter numbers only. Try Again!")
    } else if (temp > 100) {
        alert("Maximum 100 blocks. Try again.")
    } else {
        blockCount = temp;
        resText.textContent = "Canvas resolution: " + blockCount + "x" + blockCount
    }
}

