class flyingGhosts {
    constructor(x) {
        this.x = x;
        this.y = 75
        this.speed = 15;
    }

    show() {
        ctx.fillStyle = 'orange';
        ctx.fillRect(this.x, this.y, 50, 315);
    }

    move() {
        this.x -= this.speed;
    }
    
    hits() {
        if ((blob.x + 50 > this.x) && (blob.x < this.x + 50) &&(blob.y <= this.y + 315)) {
            this.deathCounter = true;
        }
    }
}