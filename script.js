const grid = document.getElementById('grid')

for (i=0; i < 256; i++) {
    const singleGrid = document.createElement('div');
    console.log(singleGrid)
    singleGrid.addEventListener("mousemove", (e) => {
        singleGrid.style.cssText = "background-color: red;"
    });
    grid.appendChild(singleGrid)
    singleGrid.classList.add('singleGrid')
};

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