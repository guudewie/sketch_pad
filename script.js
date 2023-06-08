const grid = document.getElementById('grid')

for (i=0; i < 256; i++) {
    const singleGrid = document.createElement('div');
    console.log(singleGrid)
    singleGrid.addEventListener("mouseover", (e) => {
        singleGrid.style.cssText = "background-color: red;"
    });
    grid.appendChild(singleGrid)
    singleGrid.classList.add('singleGrid')
};

for (i=0; i < 256; i++) {
};
