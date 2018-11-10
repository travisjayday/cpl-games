class flyingEnemy{
    constructor(enemyX,enemyY){
        this.enemyX = enemyX
        this.enemyY = enemyY
    }
    showEnemy(){
        Context.fillStyle = "red"
        Context.fillRect(this.enemyX,this.enemyY,enemyWidth,enemyHeight)
    }
    moveEnemy(){
        this.enemyX -= 1
        if(this.enemyX < -20){
            flyingEnemies.length = 0;
            flyingEnemies[0] = new flyingEnemy(1240,240)
        }
        this.enemyY -= enemyDir
        if(this.enemyY < 0 || this.enemyY > 460){
            enemyDir *= -1
    }
    }
    flyingEnemyCollisionDetection(){
        if(playerx + playerWidth > this.enemyX && playerx < this.enemyX + enemyWidth){
            if(playery + playerHeight > this.enemyY && playery < this.enemyY + enemyWidth){
                clearInterval(gameLoop)
            }
        }
    }
}