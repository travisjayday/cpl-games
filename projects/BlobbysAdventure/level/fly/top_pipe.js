class topPipe{
    constructor(topPipex,topPipeHeight){
        this.topPipex = topPipex
        this.topPipeHeight = topPipeHeight
    }
    showtopPipe(){
        Context.fillStyle = "LawnGreen"
        Context.fillRect(this.topPipex,topPipey,pipeWidth,this.topPipeHeight)
    }
    movetopPipe(){  
        this.topPipex -= pipeSpeed
        if(this.topPipex < -330){
            if(pipeSpeed < 2.2){
                //pass
                //pipeSpeed += .2
            }    
            topPipes.length = 0;
            randomTopLength = Math.random() * ((screenHeight - 80) - 80) + 80
            topPipes[0] = new topPipe(640,randomTopLength) 
    }
    }
    TopCollisionDetection(){
        if(playerx + playerWidth >= this.topPipex && playerx <= this.topPipex + pipeWidth){
            if(playery + playerHeight >= topPipey && playery <= topPipey + randomTopLength){
                clearInterval(gameLoop);
            }
        }
    }
}