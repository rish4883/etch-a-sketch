const container = document.querySelector('.container');

const grid = [];

// Default Values
createGrid(16);
setSquareSize(16);
addGrid();
draw('#000000');

// Function to create the grid squares
function createGrid(n)  {
    for(i=0; i<n**2; i++) {
        grid[i] = document.createElement("div");
    }
}

// Function to determine the square size
function setSquareSize(n) {
    let borderLength = 2 * n;
    // let squareSize = (700 - borderLength)/n;
    let squareSize = 700/n;
    grid.forEach( square => {
       square.style.cssText = `height: ${squareSize}px; width: ${squareSize}px;`;
    });
}

// Function to append grid to DOM
function addGrid() {
    grid.forEach( square => {
        container.appendChild(square);
    });
}

// Function to remove node
function removeGrid() {
    grid.forEach( square => {
        container.removeChild(square);
    });
    grid.length = 0;
}

// Slider value
const slider = document.querySelector('.slider');

// Grid slider label
const gridSize = document.querySelector(".grid-size");

slider.addEventListener('input', () => {
    gridSize.textContent = `Grid size: ${slider.value} x ${slider.value}`;
    removeGrid();
    createGrid(slider.value);
    setSquareSize(slider.value);
    addGrid();
    draw(color.value);
});

 
// draw Button Event
const drawButton = document.querySelector('.draw');
// Event Listener for drawing
function draw(color) {
    grid.forEach( square => {
        square.addEventListener('mouseover', (e) => { 
            e.target.classList.remove('erase');
            e.target.style.backgroundColor = `${color}`;
        });
    });
}

drawButton.addEventListener('click', draw);

// Clear button event
const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    grid.forEach(square => square.classList.remove('click'))
});

// Eraser Button event
const eraser = document.querySelector('.eraser');

function handleEraser() {
    grid.forEach( square => {
        square.addEventListener('mouseover', (e) => {
            e.target.classList.remove('click');
            e.target.classList.add('erase');
        });
    });
}

eraser.addEventListener('click', handleEraser);

// Color Picker
const color = document.querySelector('#pick-color');

color.addEventListener('input', () => draw(color.value));


