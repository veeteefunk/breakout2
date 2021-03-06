const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// create ball props
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4
}

// draw ball on canvas
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI *2);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
}

// create paddle props

const paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height -20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0
}

//draw paddle on canvas
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
}

drawBall();
drawPaddle();

// rules and close event handlers
rulesBtn.addEventListener('click', () =>
rules.classList.add('show'));
closeBtn.addEventListener('click', () =>
rules.classList.remove('show'));
