class Background {
	constructor(canW, canH, imgLoadCallback) {
		this.loaded = false;
		this.image = new Image();
		this.image.onload = imgLoadCallback; 
		this.image.src = "../../res/level/swim_background.jpg"
		this.canvasW = canW; 
		this.canvasH = canH; 
		this.moveSpd = 4; 
		this.x = 0; 
	}

	update() {
		ctx.drawImage(this.image,
			0, 0, this.image.width, this.image.height,
			this.x, 0, this.canvasW, this.canvasH)
		ctx.drawImage(this.image,
			0, 0, this.image.width, this.image.height,
			this.x + this.canvasW, 0, this.canvasW, this.canvasH)

		this.x -= this.moveSpd;
		if (this.x + this.canvasW < 0)
			this.x = 0; 
	}
}
