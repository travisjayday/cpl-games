class flyingGhost {
    constructor(x) {
        this.x = x;
    }

    show() {
        ctx.fillStyle = 'orange';
        ctx.fillRect(this.x, 75, 50, 315);
    }

    move() {
        this.x -= 11;
    }
    
    hits() {
        if ((blob.x + 50 > this.x) && (blob.x < this.x + 50) && (blob.y <= 380)) {
            this.deathCounter = true;
        }
    }
}