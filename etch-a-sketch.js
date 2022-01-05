
const initialGrid = 16
const initialMode = 'regular'
const reset = document.getElementById('reset')
const eraser = document.getElementById('eraser')

let currentMode = initialMode
let currentColor = 'black'

eraser.addEventListener('click', () => {
    currentMode = 'eraser'
})
const rainbow = document.getElementById('rainbow')
rainbow.addEventListener('click', () => {
    currentMode = 'rainbow'
})
const regular = document.getElementById('regular')
regular.addEventListener('click', () => {
    currentMode = 'regular'
})



function chooseColor(e) {
    switch(currentMode)  {
        case 'rainbow':
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, 
                                                  ${Math.floor(Math.random() * 255)}, 
                                                  ${Math.floor(Math.random() * 255)})`
            break;
        case 'regular':
            e.target.style.backgroundColor = 'black';
            break;
        case 'eraser':
            e.target.style.backgroundColor = 'white';
            break;
    } 
}

function createGrid(rows) {
    const grid = document.getElementById('grid')
    grid.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    boxes = rows**2
    for (i = 0; i < boxes; i++) {
        const box = document.createElement('div');
        box.classList = 'box'
        box.addEventListener('mouseover', chooseColor)
        grid.appendChild(box)
    }
}
reset.addEventListener('click', () => {
    let gridWidth = prompt('How many pixels do you want to have in the width/height? (100 max)')
    while (gridWidth > 100) {
        gridWidth = prompt('How many pixels do you want to have in the width/height? (100 max)')
    } 
    if (gridWidth === null) {
        return;
    }
    const allBox = document.querySelectorAll('.box');
    allBox.forEach(box => box.remove())    
    createGrid(gridWidth)
})

createGrid(initialGrid)
