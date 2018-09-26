var ballX = 1000;
var ballY = 400;
var context;
var dirX = 1;
var dirY = 1;
var bscore = 0;
var rscore = 0;
var cL = 210;
var cR = 1054;
var cU = 105;
var cD = 605;
var rect1Y = cU + 1;
var rect2Y = cU + 1;
var ballSize = 10;

onkeydown = function (key) {
    if (key.keyCode == 38) {
        paddle2Up();
    }
    if (key.keyCode == 40) {
        paddle2Down();
    }
    if (key.keyCode == 87) {
        paddle1Up();
    }
    if (key.keyCode == 83) {
        paddle1Down();
    }
}

function ballMove() {
    ballX = ballX + dirX;
    ballY = ballY + dirY;
    if ((ballY + 10) >= cD) {
        dirY = -1;
    }
    if ((ballY - 10) <= cU) {
        dirY = 1;
    }
    if (((ballX + 10) >= cR - 18) && ((ballY + 10) > rect2Y) && ((ballY - 10) < (rect2Y + 75)) && (ballX < cR)) {
        dirX = -1;
    }
    if (((ballX - 10) <= cL + 18) && ((ballY + 10) > rect1Y) && ((ballY - 10) < (rect1Y + 75)) && (ballX > cL)) {
        dirX = 1;
    }
}
function paddle1Up() {
    rect1Y = rect1Y - 10;
    if (rect1Y < cU) {
        rect1Y = cU;
    }
}
function paddle1Down() {
    rect1Y = rect1Y + 10;
    if ((rect1Y + 75) > cD) {
        rect1Y = cD - 75;
    }
}
function paddle2Up() {
    rect2Y = rect2Y - 10;
    if (rect2Y < cU) {
        rect2Y = cU;
    }
}
function paddle2Down() {
    rect2Y = rect2Y + 10;
    if ((rect2Y + 75) > cD) {
        rect2Y = cD - 75;
    }
}
function initCanvas() {
    var canvasObject = document.getElementById('myCanvas');
    context = canvasObject.getContext('2d');
    setInterval(draw, 2);
}
function draw() {
    context.fillStyle = 'black';
    context.fillRect(210, 105, 844, 500);

    context.fillStyle = 'white';
    context.fillRect(cL + 5, rect1Y, 13, 75);
    context.fillRect(cR - 18, rect2Y, 13, 75);

    context.fillStyle = 'red';
    context.beginPath();
    context.arc(ballX, ballY, ballSize, 0, 2 * Math.PI);
    context.fill();
    ballMove();

    if (ballX + 10 > cR) {
        bscore += 1;
        ballSize = 0;
        ballX = 632;
        ballY = (cD + cU) / 2;
        ballSize = 10;
    }
    if (ballX - 10 < cL) {
        ballSize = 0;
        ballX = 632;
        ballY = (cD + cU) / 2;
        ballSize = 10;
        rscore += 1;
    }
    document.getElementById("left-button").innerHTML = bscore;
    document.getElementById("right-button").innerHTML = rscore;
}