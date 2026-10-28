const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const fontSize = 16;
let columns;
let drops;

const characters = 
    "アカサタナハマヤラワ012345789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);

}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px monospace`;
    for (let i = 0; i < drops.length; i++) {
        const char = characters[
            Math.floor(Math.random() * characters.length)
        ];

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = "#00ff41";
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

setInterval(draw, 50)