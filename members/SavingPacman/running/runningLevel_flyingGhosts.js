class flyingGhost {
    constructor(x) {
        this.x = x;
    }

    show() {
        ctx.fillStyle = 'orange';
        ctx.fillRect(this.x, 75, 50, 315);
    }

    move() {
        this.x -= 12;
    }
}