const grid = [];
for(i=0; i<16; i++) {
    grid[i] = document.createElement("div");
}

const container = document.querySelector('.container');

grid.forEach( square => {
    container.appendChild(square);
});