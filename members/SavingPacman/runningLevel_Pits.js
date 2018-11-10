class Pit {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 15;
    }

    show() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, 430, 150, 50);
    }

    move() {
        this.x -= this.speed;
    }

    hits() {
        if ((blob.x > this.x) && ((blob.x + 50) < (this.x + 150)) && (blob.y + 50 >= 430)) {
            blob.y += blob.vel;
        }
    }
}