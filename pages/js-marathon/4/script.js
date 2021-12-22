const board = document.querySelector('#board');
const squaresNumber = 500;
const colors = ['#3cd8a8', '#cefb9f', '#d1b4f9', '#dedc00', '#3ab5e1', '#08cc80', '#ea5534'];


for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener("mouseleave", () => {
        removeColor(square);
    });

    board.append(square);
}

function setColor (element) {
    const randomColor = getRandomColor();
    element.style.backgroundColor = randomColor;
    element.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;

}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}