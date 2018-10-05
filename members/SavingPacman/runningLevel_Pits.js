class Enemy {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    show () {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, 150, 50);
    }

    move () {
        this.x -= 8;
    }
}