class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 2;
        this.startAngle = 0;
        this.endAngle = 2*Math.PI;
    }

    show(){
        context.beginPath();
        context.arc(this.x, this.y, this.size, this.startAngle, this.endAngle);
        context.fillStyle = 'white';
        context.fill();
    }
}