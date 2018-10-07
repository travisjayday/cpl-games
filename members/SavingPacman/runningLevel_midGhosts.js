class midGhost {
    constructor(x) {
        this.x = x;
        this.deadCounter = false;
    }

    show() {
        ctx.fillStyle = 'purple';
        ctx.fillRect(this.x, 385, 75, 25);
    }

    move() {
        this.x -= 7;
    }

    hits() {
        if ((blob.x + 50 > this.x) && (blob.x < this.x + 75) && (blob.y >= 380)) {
            this.deathCounter = true;
        }
    }
}