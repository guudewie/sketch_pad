const gridSizeInput = document.querySelector('.grid-size-input')
const blackButton = document.querySelector('.black-button')
const customizeButton = document.querySelector('.customize-button')
const customizeInput = document.querySelector('.customize-Input')
const lightButton = document.querySelector('.light-button')
const shadowButton = document.querySelector('.shadow-button')
const psychButton = document.querySelector('.psych-button')
const sketchContainer = document.querySelector('.sketch-container')

const grid = document.getElementById('grid')

let singleGrid;

gridSizeInput.addEventListener("change", () => changeGrid(gridSizeInput.value))

createGrid()
draw()

function draw (singleGrid) {

    blackButton.addEventListener("click", () => {drawBlack(singleGrid);})
    lightButton.addEventListener("click", () => {drawLight(singleGrid);})
    shadowButton.addEventListener("click", () => {drawShadow(singleGrid);})
    psychButton.addEventListener("click", () => {drawRandom(singleGrid);})

}

//grid functions start
function changeGrid (newGridSize) {
    let grid = document.getElementById('grid')
    grid.remove()

    let newGrid = document.createElement('div');
    sketchContainer.appendChild(newGrid);
    newGrid.setAttribute('id', 'grid')
    
    createGrid(newGridSize, newGrid);
}

function createGrid (cellsXAndY = 16, newGrid = grid) {
    
    let cellsTotal = cellsXAndY * cellsXAndY
    let cellDimensions = 512/cellsXAndY
    for (i=0; i < cellsTotal; i++) {
        singleGrid = document.createElement('div');
        newGrid.appendChild(singleGrid);
        singleGrid.classList.add('singleGrid')

        singleGrid.style.width = `${cellDimensions}px`;
        singleGrid.style.height = `${cellDimensions}px`;

        draw(singleGrid)
    };
}

// Drawing functions start
function drawBlack (cell) {
    cell.addEventListener("mouseenter", (e) => {
        cell.style.backgroundColor = "black"
    });
}

function drawRandom (cell) {

    cell.addEventListener("mouseenter", (e) => {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);

        cell.style.backgroundColor = `rgb(${r},${g},${b})`
    });
}

function drawShadow (cell) {

    cell.addEventListener("mouseenter", (e) => {

        let rgbValue = window.getComputedStyle(cell, null).getPropertyValue("background-color")
        let regEx = /(\d{1,3}), (\d{1,3}), (\d{1,3})/;

        let rgbValuesArray = regEx.exec(rgbValue);

        let rgbRed = rgbValuesArray[1]
        let rgbGreen = rgbValuesArray[2]
        let rgbBlue = rgbValuesArray[3]
        let multiplier = 0.95

        cell.style.backgroundColor = `rgb(  ${rgbRed*multiplier},
                                            ${rgbGreen*multiplier},
                                            ${rgbBlue*multiplier})`
    }); 
}

function drawLight (cell) {

    cell.addEventListener("mouseenter", (e) => {

        let rgbValue = window.getComputedStyle(cell, null).getPropertyValue("background-color")
        let regEx = /(\d{1,3}), (\d{1,3}), (\d{1,3})/;

        let rgbValuesArray = regEx.exec(rgbValue);
        console.log(rgbValuesArray)
        let rgbRed = rgbValuesArray[1]
        let rgbGreen = rgbValuesArray[2]
        let rgbBlue = rgbValuesArray[3]
        let multiplier = 1.05

        cell.style.backgroundColor = `rgb(  ${rgbRed*multiplier},
                                            ${rgbGreen*multiplier},
                                            ${rgbBlue*multiplier})`
    }); 
}

function erase (cell) {
    cell.addEventListener("mouseenter", (e) => {
        cell.style.backgroundColor = "white"
    });
}





for (i=0; i < 256; i++) {

};



// grid creator function (for loop)
// function to determine singleGrid width/heights/border
// function addEventListener
// function to  draw (black/ random/ shadow/ lighting/ colorinput)
//              erase
//              reset
//
//