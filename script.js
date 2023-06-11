const gridSizeInput = document.querySelector('.grid-size-input')
const blackButton = document.querySelector('.black-button')
const customizeButton = document.querySelector('.customize-button')
const customizeInput = document.querySelector('.customize-Input')
const lightButton = document.querySelector('.light-button')
const shadowButton = document.querySelector('.shadow-button')
const psychButton = document.querySelector('.psych-button')
const eraseButton = document.querySelector('.erase-button')
const resetButton = document.querySelector('.reset-button')
const sketchContainer = document.querySelector('.sketch-container')


gridSizeInput.addEventListener("change", () => changeGrid(gridSizeInput.value))
resetButton.addEventListener("click", () => {changeGrid(); gridSizeInput.value = 16;})

blackButton.addEventListener("click", () => {loopSingleCells(drawBlack)})
lightButton.addEventListener("click", () => {loopSingleCells(drawLight);})
shadowButton.addEventListener("click", () => {loopSingleCells(drawShadow);})
psychButton.addEventListener("click", () => {loopSingleCells(drawRandom);})
customizeButton.addEventListener("click", () => {loopSingleCells(drawCustom);})
eraseButton.addEventListener("click", () => {loopSingleCells(erase)})


let singleGrid;
let customRGB;

function loopSingleCells (drawingMethod) {

    let singleCells = document.querySelectorAll('.singleGrid');
    singleCells.forEach( e => drawingMethod(e))

}

/********************** GRID FUNCIONS START ***********************/

//initiate grid
createGrid()

function changeGrid (newGridSize = 16) {
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
    };
}

/********************** DRAW FUNCIONS START ***********************/

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

        let rgbValue = window.getComputedStyle(cell).getPropertyValue("background-color")
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

        let rgbValue = window.getComputedStyle(cell).getPropertyValue("background-color")
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

function drawCustom (cell) {

    cell.addEventListener("mouseover", (e) => {
        
        cell.style.backgroundColor = customRGB
    })
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


//troggle buttons
let blackToggle = false;
let psychToggle = false;
let customizeToggle = false;
let lightToggle = false;
let shadowToggle = false;
let eraseToggle = false;

blackButton.addEventListener("click", (e) => toggleButtons(e.srcElement))
psychButton.addEventListener("click", (e) => toggleButtons(e.srcElement))
customizeButton.addEventListener("click", (e) => toggleButtons(e.srcElement))
lightButton.addEventListener("click", (e) => toggleButtons(e.srcElement))
shadowButton.addEventListener("click", (e) => toggleButtons(e.srcElement))
eraseButton.addEventListener("click", (e) => toggleButtons(e.srcElement))

function toggleButtons (button) {

    switch (button) {
        case blackButton:
            blackToggle = true;
            blackButton.classList.toggle('button-down');
            drawBlack()

            psychButton.classList.remove('button-down');
            psychToggle = false;
            customizeButton.classList.remove('button-down');
            customizeToggle = false;
            lightButton.classList.remove('button-down');
            lightToggle = false;
            shadowButton.classList.remove('button-down');
            shadowToggle = false;
            eraseButton.classList.remove('button-down');
            eraseToggle = false;
            break;
        
        case psychButton:
            psychToggle = true;
            psychButton.classList.toggle('button-down');

            blackButton.classList.remove('button-down');
            blackToggle = false;
            drawBlack()
            customizeButton.classList.remove('button-down');
            customizeToggle = false;
            lightButton.classList.remove('button-down');
            lightToggle = false;
            shadowButton.classList.remove('button-down');
            shadowToggle = false;
            eraseButton.classList.remove('button-down');
            eraseToggle = false;
            break;

        case customizeButton:
            customizeToggle = true;
            customizeButton.classList.toggle('button-down');

            blackButton.classList.remove('button-down');
            blackToggle = false;
            psychButton.classList.remove('button-down');
            psychToggle = false;
            lightButton.classList.remove('button-down');
            lightToggle = false;
            shadowButton.classList.remove('button-down');
            shadowToggle = false;
            eraseButton.classList.remove('button-down');
            eraseToggle = false;
            break;

        case lightButton:
            lightToggle = true;
            lightButton.classList.toggle('button-down');

            blackButton.classList.remove('button-down');
            blackToggle = false;
            customizeButton.classList.remove('button-down');
            customizeToggle = false;
            psychButton.classList.remove('button-down');
            psychToggle = false;
            shadowButton.classList.remove('button-down');
            shadowToggle = false;
            eraseButton.classList.remove('button-down');
            eraseToggle = false;
            break;

        case shadowButton:
            shadowToggle = true;
            shadowButton.classList.toggle('button-down');

            blackButton.classList.remove('button-down');
            blackToggle = false;
            customizeButton.classList.remove('button-down');
            customizeToggle = false;
            lightButton.classList.remove('button-down');
            lightToggle = false;
            psychButton.classList.remove('button-down');
            psychToggle = false;
            eraseButton.classList.remove('button-down');
            eraseToggle = false;
            break;
            
        case eraseButton:
            eraseToggle = true;
            eraseButton.classList.toggle('button-down');

            blackButton.classList.remove('button-down');
            blackToggle = false;
            customizeButton.classList.remove('button-down');
            customizeToggle = false;
            lightButton.classList.remove('button-down');
            lightToggle = false;
            shadowButton.classList.remove('button-down');
            shadowToggle = false;
            psychButton.classList.remove('button-down');
            psychToggle = false;
            break;
    }
}