class midGhosts {
    constructor(x) {
        this.x = x;
    }

    show() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, 375, 75, 25);
    }

    move() {
        this.x -= 10;
    }
}