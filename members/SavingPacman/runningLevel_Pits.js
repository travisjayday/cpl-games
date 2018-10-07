class Pit {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, 430, 150, 50);
    }

    move() {
        this.x -= 7;
    }
}