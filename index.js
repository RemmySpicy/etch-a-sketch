const container = document.querySelector('.container');
const button = document.querySelector('button');

const grids = document.querySelectorAll('.box');
grids.forEach(grid => {
    grid.addEventListener('mouseenter', () => {
        grid.style.background = 'green';
    }) 
})

// Create a default 16x16 grid of square divs
let newSquares = 16;
function renderGrid(squares) {
    for (let i = 0; i < (squares * squares); i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
};
renderGrid(newSquares);

function clearGrid() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.parentElement.removeChild(box);
    })
}

button.addEventListener('click', () => {
    newSquares = prompt('Enter number of squares per side for the new grid. (max: 100)', '3');
    clearGrid()
    renderGrid(newSquares)
})
