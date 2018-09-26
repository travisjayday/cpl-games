var context;
var background = 'black';
var points = [];
var canvasWidth = 600;
var canvasHeight = 660;
var PacMan = new pacman(canvasWidth/2, canvasHeight-20);
var scoreValue = 0;
var rectWidth = 30;
var distance = 20;

//MAKES POINT OBJECTS
for (var i = 1; i < 30; i++) {
    points[i] = new Point(distance, i * 22);
}

//INITIALIZE CANVAS
function initCanvas() {
    context = document.getElementById('myCanvas').getContext('2d');
    setInterval(draw, 2);
}

function draw() {
    //CANVAS
    context.fillStyle = background;
    context.fillRect(1, 1, canvasWidth, canvasHeight);

    //PAC-MAN
    PacMan.turn();
    PacMan.show();
    PacMan.move();
    PacMan.hitWalls();

    //RENDERS POINTS AND SCORE
    for (var i = 1; i < 30; i++) {
        points[i].show();
        if ((PacMan.x == points[i].x) && (PacMan.y == points[i].y)) {
            scoreValue += 100;
            points[i].size = 0;
            points[i].x = 0;
            console.log(scoreValue);
        }
    }
}