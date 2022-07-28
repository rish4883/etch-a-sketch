const grid = [];
for(i=0; i<16; i++) {
    grid[i] = document.createElement("div");
}

const container = document.querySelector('.container');

//append node to DOM
grid.forEach( square => {
    container.appendChild(square);
});

// Adding hover event listener
function handleMouseHover(e) {
    e.target.classList.add('hover');
}

grid.forEach( square => {
    square.addEventListener('mouseover', handleMouseHover);
});

// Adding leave event
function handleMouseLeave(e) {
    e.target.classList.remove('hover');
}

grid.forEach( square => {
    square.addEventListener('mouseout', handleMouseLeave);
});
