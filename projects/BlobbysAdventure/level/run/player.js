class Player {
    constructor() {
		//TODO: get refernce to floor height, screen size, and height
		this.floor = 480 - 50;
		this.originalHeight = 64;
		this.height = this.originalHeight; 
        this.x = 50;
        this.y = this.floor - this.height;
        this.vel = 20;
        this.acc = 1;
        this.deathCounter = false;
		this.ducking = false; 
		this.jumping = false;
		
		this.image = new Image(); 
		this.image.src = "../../res/sprites/blob_running.png"; 
		this.frame = 0; 
		this.width = this.image.width / 8; 
    }

    show() {
        //ctx.fillStyle = 'white';
        //ctx.fillRect(this.x, this.y, 50, this.height);

		// draw sprite from spritesheet depending on which frame
		// sprite sheet is 64*12x64 with 8 frames
		ctx.drawImage(this.image, 
			this.width * this.frame, 
			0, 
			this.width, 
			this.image.height, 
			this.x, // offset x to the left a bit bec sprite is not a perfect square
			this.y, 
			this.width, 
			this.height
		); 

		// increment frames
		this.frame++; 
		if (this.frame == 8) this.frame = 0; 
    }

    jump() {
		// if jump key pressed, jump
        if (keyboard[38]) {
			this.jumping = true; 
            this.vel -= this.acc;
            this.y -= this.vel;

			// hits floor
            if (this.y > this.floor - this.height) {
                keyboard[38] = false;
				this.jumping = false; 
                this.y = this.floor - 64;
                this.vel = 20;
                this.acc = 1;
				
				if (this.ducking) this.ducking = false;
            }
        }
    }

    squish() {

        // if down pressed and not already ducking, duck
        if (keyboard[40] && this.ducking == false) {
			this.ducking = true; 
          	this.height = .6 * this.originalHeight;
			var dy = this.originalHeight - this.height; 
			this.y += dy;
        }

		// if down pressed and jumping, fall down faster
		if (keyboard[40] && this.jumping) {
			this.vel -= 3; 
		}

		// if down not pressed and still ducking, unduck
		if (!keyboard[40] && this.ducking == true){
			this.ducking = false;
			var dy = this.originalHeight - this.height; 
			this.y -= dy;
			this.height = this.originalHeight; 
		}
    }

    keyboardInput() {
        onkeydown = function (event) {
            keyboard[event.keyCode] = true;
            if (event.keyCode == 40) {
                this.goingDown = true;
            }
        }
        onkeyup = function (event) {
            if (event.keyCode == 40) {
                keyboard[event.keyCode] = false;
            }
        }
    }

    dies() {
        if (this.y > 480) {
            this.deathCounter = true;
        }
    }
}
