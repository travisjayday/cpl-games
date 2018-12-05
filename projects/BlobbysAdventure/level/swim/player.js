class Player {
	constructor(canvasW, canvasH, kb, onLoadCallback) {
		//TODO: get refernce to floor height, screen size, and height
		this.floor = 480 - 50;
		this.height = 0;
		this.width = 0; // will be set when image loaded
		this.x = canvasW * 0.15;
		this.y = canvasH / 2 - this.height / 2;

		this.keyboard = kb;

		this.moveLeft = false;
		this.moveRight = false;
		this.moveUp = false;
		this.moveDown =false;
		this.moveSpd = 8;
		
		// true when image loads
		this.loaded = false; 
		
		this.image = new Image(); 
		this.image.onload = onLoadCallback; 
		this.image.src = "../../res/sprites/blob_fly.png"
		this.frame = 0; 
 		// draw frames for every 4 iterations. Increase to make animation slower
		this.frameskip = 4; 
		this.totalFrame = 0;
	}

	show() {
		if (this.loaded == false) alert("ERROR")

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
			
		if (this.totalFrame % this.frameskip == 0) { 
			this.frame++; 
			if (this.frame == 4) 
				this.frame = 0; 
		}
		this.totalFrame ++;
	}
	
	move() {
		console.log(this.moveLeft)
		// left
		if (this.keyboard[37])
			this.x -= this.moveSpd;
		// right
		if (this.keyboard[39])
			this.x += this.moveSpd;
		// up
		if (this.keyboard[38])
			this.y -= this.moveSpd;
		// down
		if (this.keyboard[40]) 
			this.y += this.moveSpd;
	}

	

	dies() {
	}
}
