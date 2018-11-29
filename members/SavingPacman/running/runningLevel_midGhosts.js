class midGhost {
    constructor(x) {
        this.x = x;
    }

    show() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, 385, 75, 25);
    }

    move() {
        this.x -= 9;
    }
}