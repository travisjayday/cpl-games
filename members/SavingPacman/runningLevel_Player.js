class Player {
    constructor() {
        this.x = 50;
        this.y = 380;
        this.height = 50;
        this.vel = -25;
        this.acc = 1;

        //KEY INPUT
        onkeydown = function (event) {
            keyboard[event.keyCode] = true;
        }
        onkeyup = function (event) {
            if (event.keyCode == 40) {
                keyboard[event.keyCode] = false;
            }
        }
    }

    show() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, 50, this.height);
    }

    jump() {

        //JUMPS
        if (keyboard[38]) {
            blob.vel += 1.5 * blob.acc;
            blob.y += blob.vel;
        }
        //HITS FLOOR
        if (this.y > 380) {
            keyboard[38] = false;
            this.y = 380;
            this.vel = -25;
            this.acc = 1;
        }
    }

    squish() {
        if (keyboard[40]) {
            this.y = 405;
        }
    }
}