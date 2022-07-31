const container = document.querySelector('.container');
const button = document.querySelector('button');

// Function to render desired grids
function renderGrid(squares) {
    for (let i = 0; i < (squares * squares); i++) {
        const div = document.createElement('div');
        
        // Add box class to each div
        div.classList.add('box');
        
        container.appendChild(div);
    }
    
    // Reset the grid template columns and rows each time
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;

    // Color grids after creating them
    colorGrid();
};

// Color grids when mouse enters it
function colorGrid() {
    const grids = document.querySelectorAll('.box');
    grids.forEach(grid => {
        grid.addEventListener('mouseenter', () => {
            grid.style.background = 'green';
        }); 
    });
}

// Clear current grid when new grid is set
function clearGrid() {
    const grids = document.querySelectorAll('.box');
    grids.forEach(box => {
        box.parentElement.removeChild(box);
    })
}

// Create a default 16x16 grid in container
let newSquares = 16;
renderGrid(newSquares);


// Reset the grids to the desired dimensions
button.addEventListener('click', () => {
    newSquares = prompt('Enter number of squares per side for the new grid. (max: 100)', '3');

    // Check if user had input valid number
    if (newSquares > 100 || isNaN(newSquares)) {
        alert('Please enter a valid number below 100');
        return;
    }

    clearGrid()
    renderGrid(newSquares)
})
