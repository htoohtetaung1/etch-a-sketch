let resText = document.querySelector('.resText')
resText.textContent = "Canvas resolution: "
let canvas = document.querySelector('.canvas')
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
        createCanvas(blockCount)
        let blocks = document.querySelectorAll('.block')
        blocks.forEach(element => {
            element.addEventListener('mouseenter', () => {
                console.log("entered")
                element.style.backgroundColor = "red"
                opacity = parseFloat(element.style.opacity);
                opacity += 0.1;
                console.log(element.style.opacity);
                console.log(opacity)

                element.style.opacity = opacity

            })
        });
    }
}

function createCanvas(blocks) {
    canvas.textContent = ''
    let cWidth = parseInt(canvas.offsetWidth)
    let bWidth = 100/blocks;
    for (i=0;i<blocks*blocks;i++) {
        let div = document.createElement('div')
        div.style.width = bWidth + '%'
        div.style.height = bWidth + '%'
        div.classList.add('block')
        canvas.appendChild(div);
        div.style.opacity = '0.1'
    }

    alert("canvas width = " + cWidth + " \nblock width = " + bWidth)
}

