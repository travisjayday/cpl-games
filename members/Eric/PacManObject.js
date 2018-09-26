class pacman {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;
        this.startAngle = Math.PI / 4;
        this.endAngle = (7 * Math.PI) / 4;
        this.angleSpeed = 0.02;
        this.speed = 0;
        this.directionX = this.speed;
        this.directionY = 0;
        this.flip = false;
    }

    show() {
        context.beginPath();
        context.arc(this.x, this.y, this.size, this.startAngle, this.endAngle, this.flip);
        context.lineTo(this.x, this.y);
        context.fillStyle = 'yellow';
        context.fill();
    }

    move() {
        this.x += this.directionX;
        this.y += this.directionY;

        //KEY FUNCTIONS
        onkeydown = function (key) {
            //Moves Right
            if (key.keyCode == 39) {
                PacMan.directionX = 1;
                PacMan.directionY = 0;
                PacMan.startAngle = 0.784;
                PacMan.endAngle = 5.5;
                PacMan.flip = false
            }
            //Moves Left
            if (key.keyCode == 37) {
                PacMan.directionX = -1;
                PacMan.directionY = 0;
                PacMan.startAngle = 2.37;
                PacMan.endAngle = -2.37;
                PacMan.flip = true
            }
            //Moves Up
            if (key.keyCode == 38) {
                PacMan.directionY = -1;
                PacMan.directionX = 0;
                PacMan.startAngle = -0.786;
                PacMan.endAngle = 3.93;
                PacMan.flip = false;
            }
            //Moves Down
            if (key.keyCode == 40) {
                PacMan.directionY = 1;
                PacMan.directionX = 0;
                PacMan.startAngle = 0.786;
                PacMan.endAngle = -3.93;
                PacMan.flip = true;
            }
        }
    }

    turn() {
        //TURN RIGHT
        if (this.directionX == 1) {
            this.startAngle -= this.angleSpeed;
            this.endAngle += this.angleSpeed;
            if ((this.startAngle <= 0) || this.startAngle >= Math.PI / 4) {
                this.angleSpeed = (this.angleSpeed * -1);
            }
        }
        //TURN LEFT
        if (this.directionX == -1) {
            this.startAngle += this.angleSpeed;
            this.endAngle -= this.angleSpeed;
            if ((this.startAngle <= (3 * Math.PI) / 4) || (this.startAngle >= Math.PI)) {
                this.angleSpeed = (this.angleSpeed * -1);
            }
        }

        //TURN DOWN
        if (this.directionY == 1) {
            this.startAngle += this.angleSpeed;
            this.endAngle -= this.angleSpeed;
            if ((this.startAngle <= Math.PI / 4) || (this.startAngle >= Math.PI / 2)) {
                this.angleSpeed = (this.angleSpeed * -1);
            }
        }

        //TURN UP
        if (this.directionY == -1) {
            this.startAngle -= this.angleSpeed;
            this.endAngle += this.angleSpeed;
            if ((this.startAngle <= -Math.PI / 2) || (this.startAngle >= -Math.PI / 4)) {
                this.angleSpeed = (this.angleSpeed * -1);
            }
        }
    }

    hitWalls() {
        //HITS RIGHT WALL
        if ((this.x + this.size) >= canvasWidth) {
            this.x = (canvasWidth - this.size);
        }
        //Hits Left Wall
        if ((this.x - this.size) <= 0) {
            this.x = (this.size);
        }
        //Hits Bottom Wall
        if ((this.y + this.size) >= canvasHeight) {
            this.y = (canvasHeight - this.size);
        }
        //Hits Top Wall
        if ((this.y - this.size) <= 0) {
            this.y = (this.size);
        }
    }
}