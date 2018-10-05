class Player {
    constructor() {
        this.x = 50;
        this.y = 330;
        this.vel = 20;
        this.acc = 1;
        this.otherVel = 10;
        this.otherAcc = 0.5;
    }

    show() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, 100, 100);
    }

    jump() {
        //JUMPS
        if (keyboard[38]) {
            this.vel -= this.acc;
            this.y -= this.vel;

            //HITS FLOOR
            if (this.y > 330) {
                keyboard[38] = false;
                this.y = 330;
                this.vel = 20;
                this.acc = 1;
            }
        }
    }
    squish() {

        //DUCKS
        if (keyboard[40]) {
            if(this.y < 330) {
                this.otherVel += this.otherAcc;
                this.y += this.otherVel;
            }


            if (this.y >= 330) {
                keyboard[38] = false;
                this.y = 380;
            }

            //HITS FLOOR
            if (this.y > 380) {
                this.vel = 20;
                this.acc = 1;
                this.y = 405;
            }
        }

        //UNSQUISHES
        if (this.y == 380) {
            if (!keyboard[40]) {
                this.vel = 20;
                this.acc = 1;
                this.y = 330;
            }
        }
    }

    keyboardInput() {
        onkeydown = function (event) {
            keyboard[event.keyCode] = true;
            if (event.keyCode == 40) {
                this.goingDown = true;
            }
        }
        onkeyup = function (event) {
            if (event.keyCode == 40) {
                keyboard[event.keyCode] = false;
            }
        }
    }
}
