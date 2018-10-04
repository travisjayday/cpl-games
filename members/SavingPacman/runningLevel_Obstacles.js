class Enemy {
    constructor () {
        this.x = 600;
        this.y = 300;
        this.height;

    }

    show () {
        for (var i = 0; true; i++) {
            if ((i % 50) == 0) {
                ctx.fillStyle = 'green';
                ctx.fillRect(this.x, this.y, 40, 180); 
            }
        }
    }
}