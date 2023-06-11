const gridSizeInput = document.querySelector('.grid-size-input')
const blackButton = document.querySelector('.black-button')
const customizeButton = document.querySelector('.customize-button')
const customizeInput = document.querySelector('.customize-input')
const lightButton = document.querySelector('.light-button')
const shadowButton = document.querySelector('.shadow-button')
const psychButton = document.querySelector('.psych-button')
const eraseButton = document.querySelector('.erase-button')
const resetButton = document.querySelector('.reset-button')
const sketchContainer = document.querySelector('.sketch-container')

let singleGrid;
var customRGB = '#ff2020'

gridSizeInput.addEventListener("change", () => changeGrid(gridSizeInput.value))
resetButton.addEventListener("click", () => {changeGrid(); gridSizeInput.value = 16;})
customizeInput.onchange = (() => {customRGB = customizeInput.value})

blackButton.addEventListener("click", () => {loopSingleCells(drawBlack)})
lightButton.addEventListener("click", () => {loopSingleCells(drawLight);})
shadowButton.addEventListener("click", () => {loopSingleCells(drawShadow);})
psychButton.addEventListener("click", () => {loopSingleCells(drawRandom);})
customizeButton.addEventListener("click", () => {loopSingleCells(drawCustom);})
eraseButton.addEventListener("click", () => {loopSingleCells(erase)})


function loopSingleCells (drawingMethod) {

    let elements = document.querySelectorAll('.singleGrid');
    
    elements.forEach( e => {
        eClone = e.cloneNode(true)

        e.parentNode.replaceChild(eClone, e)
    }
    )

    let singleCells = document.querySelectorAll('.singleGrid');
    singleCells.forEach( e => {drawingMethod(e)})

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
    cell.addEventListener("mouseover", (e) => {
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
        let multiplier = 0.9

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
        let multiplier = 1.1

        cell.style.backgroundColor = `rgb(  ${rgbRed*multiplier},
                                            ${rgbGreen*multiplier},
                                            ${rgbBlue*multiplier})`
    }); 
}

function drawCustom (cell) {

    cell.addEventListener("mouseover", (e) => {
        
        cell.style.backgroundColor = customRGB;
    })
}

function erase (cell) {
    cell.addEventListener("mouseenter", (e) => {
        cell.style.backgroundColor = "white"
    });
}


/********************** TOGGLE BUTTONS START ***********************/

blackButton.addEventListener(("click"), (e) => toggleButtons(e.srcElement))
psychButton.addEventListener("click", (e) => toggleButtons(e.srcElement))
customizeButton.addEventListener("click", (e) => toggleButtons(e.srcElement))
lightButton.addEventListener("click", (e) => toggleButtons(e.srcElement))
shadowButton.addEventListener("click", (e) => toggleButtons(e.srcElement))
eraseButton.addEventListener("click", (e) => toggleButtons(e.srcElement))


function toggleButtons (button) {

    switch (button) {
        case blackButton:
            blackButton.classList.add('button-down');

            psychButton.classList.remove('button-down');
            customizeButton.classList.remove('button-down');
            lightButton.classList.remove('button-down');
            shadowButton.classList.remove('button-down');
            eraseButton.classList.remove('button-down');
            break;
        
        case psychButton:
            psychButton.classList.add('button-down');

            blackButton.classList.remove('button-down');
            customizeButton.classList.remove('button-down');
            lightButton.classList.remove('button-down');
            shadowButton.classList.remove('button-down');
            eraseButton.classList.remove('button-down');
            break;

        case customizeButton:
            customizeToggle = true;
            customizeButton.classList.add('button-down');

            blackButton.classList.remove('button-down');
            psychButton.classList.remove('button-down');
            lightButton.classList.remove('button-down');
            shadowButton.classList.remove('button-down');
            eraseButton.classList.remove('button-down');
            break;

        case lightButton:
            lightButton.classList.add('button-down');

            blackButton.classList.remove('button-down');
            customizeButton.classList.remove('button-down');
            psychButton.classList.remove('button-down');
            shadowButton.classList.remove('button-down');
            eraseButton.classList.remove('button-down');
            break;

        case shadowButton:
            shadowButton.classList.add('button-down');

            blackButton.classList.remove('button-down');
            customizeButton.classList.remove('button-down');
            lightButton.classList.remove('button-down');
            psychButton.classList.remove('button-down');
            eraseButton.classList.remove('button-down');
            break;
            
        case eraseButton:
            eraseButton.classList.add('button-down');

            blackButton.classList.remove('button-down');
            customizeButton.classList.remove('button-down');
            lightButton.classList.remove('button-down');
            shadowButton.classList.remove('button-down');
            psychButton.classList.remove('button-down');
            break;
    }
}



// only draw when clicked
// pre select black drawing option
