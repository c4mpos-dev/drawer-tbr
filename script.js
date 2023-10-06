// script.js
const colors = ["red", "green", "yellow"];
const colorLeft = document.getElementById("color-left");
const colorBottom = document.getElementById("color-bottom");
const colorRight = document.getElementById("color-right");
const generateButton = document.getElementById("generate-button");

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function updateColors() {
    const leftColor = getRandomColor();
    let bottomColor, rightColor;

    do {
        bottomColor = getRandomColor();
    } while (bottomColor === leftColor);

    do {
        rightColor = getRandomColor();
    } while (rightColor === leftColor || rightColor === bottomColor);

    colorLeft.style.backgroundColor = leftColor;
    colorBottom.style.backgroundColor = bottomColor;
    colorRight.style.backgroundColor = rightColor;
}

generateButton.addEventListener("click", updateColors);

updateColors(); // Mostra as cores iniciais
