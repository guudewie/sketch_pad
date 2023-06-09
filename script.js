const grid = document.getElementById('grid')


for (i=0; i < 256; i++) {
    const singleGrid = document.createElement('div');
    grid.appendChild(singleGrid)
    singleGrid.classList.add('singleGrid')
    drawLight(singleGrid)
};



function drawBlack (cell) {
    cell.addEventListener("mouseenter", (e) => {
        cell.style.cssText = "background-color: black"
    });
}

function drawRandom (cell) {

    cell.addEventListener("mouseenter", (e) => {
        let a = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let c = Math.floor(Math.random()*255);

        cell.style.cssText = `background-color: rgb(${a},${b},${c})`
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

        cell.style.cssText = `background-color: rgb(${rgbRed*multiplier},
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

        cell.style.cssText = `background-color: rgb(${(rgbRed)*multiplier},
                                                    ${(rgbGreen)*multiplier},
                                                    ${(rgbBlue)*multiplier})`
    }); 
}

function erase (cell) {
    cell.addEventListener("mouseenter", (e) => {
        cell.style.cssText = "background-color: white"
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