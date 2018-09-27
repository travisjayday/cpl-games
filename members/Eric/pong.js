var ballX = 1000;
var ballY = 400;
var context;
var dirX = 2;
var dirY = 2;
var bscore = 0;
var rscore = 0;
var cL = 210;
var cR = 1054;
var cU = 105;
var cD = 605;
var rect1Y = cU + 1;
var rect2Y = cU + 1;
var ballSize = 10;
var keyboard = {};



onkeydown = function (event) {
    keyboard[event.keyCode] = true;
}

onkeyup = function (event) {
    keyboard[event.keyCode] = false;
}

function player1Move(){
    if (keyboard['W'.charCodeAt(0)]){
        paddle1Up();
    }
    if (keyboard['S'.charCodeAt(0)]){
        paddle1Down();
    }
}

function player2Move(){
    if (keyboard[38]){
        paddle2Up();
    }
    if (keyboard[40]){
        paddle2Down();
    }
}

function ballMove() {
    ballX = ballX + dirX;
    ballY = ballY + dirY;
    if ((ballY + 10) >= cD) {
        dirY = -2;
    }
    if ((ballY - 10) <= cU) {
        dirY = 2;
    }
    if (((ballX + 10) >= cR - 18) && ((ballY + 10) > rect2Y) && ((ballY - 10) < (rect2Y + 75)) && (ballX < cR)) {
        dirX = -2;
    }
    if (((ballX - 10) <= cL + 18) && ((ballY + 10) > rect1Y) && ((ballY - 10) < (rect1Y + 75)) && (ballX > cL)) {
        dirX = 2;
    }
}
function paddle1Up() {
    rect1Y = rect1Y - 2;
    if (rect1Y < cU) {
        rect1Y = cU;
    }
}
function paddle1Down() {
    rect1Y = rect1Y + 2;
    if ((rect1Y + 75) > cD) {
        rect1Y = cD - 75;
    }
}
function paddle2Up() {
    rect2Y = rect2Y - 2;
    if (rect2Y < cU) {
        rect2Y = cU;
    }
}
function paddle2Down() {
    rect2Y = rect2Y + 2;
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

    player1Move();
    player2Move();

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
