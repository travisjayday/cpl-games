class bottomPipe{
    constructor(bottomPipex, bottomPipeHeight){
        this.bottomPipex = bottomPipex
        this.bottomPipeHeight = bottomPipeHeight
    }
    showbottomPipe(){
        Context.fillStyle = "LawnGreen"
        Context.fillRect(this.bottomPipex,screenHeight - this.bottomPipeHeight,pipeWidth,this.bottomPipeHeight)
    }
    movebottomPipe(){
        this.bottomPipex -= pipeSpeed
        if(this.bottomPipex < -30){
            bottomPipes.length = 0;
            randomBottomLength = Math.random() * ((screenHeight - 80) - 80) + 80
            bottomPipes[0] = new bottomPipe(DistancePipes,randomBottomLength)
        }
    }
    BottomCollisionDetection(){
        if(playerx + playerWidth >= this.bottomPipex && playerx <= this.bottomPipex + pipeWidth){
            if(playery + playerHeight >= screenHeight - this.bottomPipeHeight && playery <= screenHeight){
                clearInterval(gameLoop);
            }
        }
    }
}
