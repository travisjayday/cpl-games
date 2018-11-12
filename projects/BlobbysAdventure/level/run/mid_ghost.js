class midGhost {
    constructor(x) {
        this.x = x;
		this.height = 55; 
		this.width = 75;
        this.speed = 15;
        this.deadCounter = false;
		this.floor = 480 - 50; 
    }

    show() {
        ctx.fillStyle = 'purple';
        ctx.fillRect(this.x-10, 385, this.width + 10, this.height);
    }

    move() {
        this.x -= this.speed;
    }

    hits() {
        if ((blob.x + blob.width >= this.x) 
			&& (blob.x + blob.width < this.x + this.width) 
			&& (blob.y + blob.height >= this.floor - this.height))
            this.deathCounter = true;
    }
}
