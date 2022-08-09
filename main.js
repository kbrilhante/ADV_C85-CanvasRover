const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

const roverWidth = 100;
const roverHeight = 90;

const borderRight = canvas.width - roverWidth;
const borderBottom = canvas.height - roverHeight;

var roverX = 10;
var roverY = 10;

const roverImage = "rover.png";

const backgroundList = ['mars_0.jpg', 'mars_1.jpg', 'mars_2.jpeg', 'mars_3.jpg', 'mars_4.jpg'];

const randomNumber = Math.floor(Math.random() * 5);
console.log(randomNumber);

const backgroundImage = backgroundList[randomNumber];

var backgroundImgTag, roverImgTag;


function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.src = backgroundImage;
    backgroundImgTag.onload = uploadBackground;
    
    roverImgTag = new Image();
    roverImgTag.src = roverImage;
    roverImgTag.onload = uploadRover;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", keyDown);

function keyDown (e) {
    const passo = 10;
    const keyPressed = e.keyCode;
    console.log(e.key + " -> " + keyPressed);
    if(keyPressed == 37) {
        // esquerda
        console.log('esquerda');
        if (roverX > 0) {
            roverMove(-passo, 0);
        }
    } else if (keyPressed == 38) {
        // cima
        console.log('cima');
        if (roverY > 0) {
            roverMove(0, -passo);
        }
    } else if (keyPressed == 39) {
        // direita
        console.log('direita');
        if (roverX <= borderRight) {
            roverMove(passo, 0);
        }
    } else if (keyPressed == 40) {
        // baixo
        console.log('baixo');
        if (roverY <= borderBottom) {
            roverMove(0, passo);
        }
    }
}

function roverMove (x, y) {
    roverX += x;
    roverY += y;

    uploadBackground();
    uploadRover();
}