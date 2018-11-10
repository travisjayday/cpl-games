class midGhost {
    constructor(x) {
        this.x = x;
        this.speed = 15;
        this.deadCounter = false;
    }

    show() {
        ctx.fillStyle = 'purple';
        ctx.fillRect(this.x, 385, 75, 25);
    }

    move() {
        this.x -= this.speed;
    }

    hits() {
        if ((blob.x + 50 > this.x) && (blob.x < this.x + 75) && (blob.y >= 380)) {
            this.deathCounter = true;
        }
    }
}