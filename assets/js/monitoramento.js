const colorTop = document.getElementById("color-top");
const colorBottom = document.getElementById("color-bottom");
const generateButton = document.getElementById("generate-button");
const modeButton = document.getElementById("mode-button");

modeButton.addEventListener("click", function () {
    window.location.href = "index.html";
});

function getRandomColor() {
    const colors = ["yellow", "red"]; // Cores diferentes
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function updateColors() {
    const topColor = getRandomColor();
    let bottomColor;

    do {
        bottomColor = getRandomColor();
    } while (bottomColor === topColor);

    colorTop.style.backgroundColor = topColor;
    colorBottom.style.backgroundColor = bottomColor;
}

generateButton.addEventListener("click", () => {
    let count = 0;
    const interval = setInterval(() => {
        updateColors();
        count++;

        if (count === 20) {
            clearInterval(interval); // Parar o sorteio após 10 vezes
        }
    }, 100); // Intervalo de 0.2 segundos (200 milissegundos)
});

updateColors(); // Mostra as cores iniciais