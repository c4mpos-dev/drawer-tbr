// script.js
const colors = ["red", "green", "yellow"];
const colorLeft = document.getElementById("color-left");
const colorBottom = document.getElementById("color-bottom");
const colorRight = document.getElementById("color-right");
const generateButton = document.getElementById("generate-button");
const modeButton = document.getElementById("mode-button");

modeButton.addEventListener("click", function () {
    window.location.href = "monitoramento.html";
});

window.addEventListener('scroll', function (e) {
    // Impede a rolagem definindo a posição de rolagem de volta para o topo
    window.scrollTo(0, 0);
});

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
