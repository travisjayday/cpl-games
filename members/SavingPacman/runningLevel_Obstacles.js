class Enemy {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.height = 50;

    }

    show () {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, 150, this.height);
    }

    move () {
        this.x -= 8;
    }
}