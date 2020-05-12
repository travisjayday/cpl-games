class Pit {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 15;
		this.floor = 480 - 50; 
		this.width = 150;
    }

    show() {
        ctx.fillStyle = '#85e34d';
        ctx.fillRect(this.x, this.floor, this.width, 50);
    }

    move() {
        this.x -= this.speed;
    }

    hits() {
        if ((blob.x >= this.x) && 
			((blob.x + blob.width) < (this.x + this.width)) && 
			(blob.y + blob.height >= this.floor -10)) {
            blob.y += blob.vel * 2;
			if (blob.jumping) blob.y -= blob.vel * 4
        }
    }
}
