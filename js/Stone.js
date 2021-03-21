class Stone {
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.image = loadImage("images/stone.png");
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
    }
    display() {
		var stoneSpot=this.body.position;	
		push()
		translate(stoneSpot.x, stoneSpot.y);
        imageMode(CENTER);
		image(this.image, 0, 0, this.width, this.height);
		pop()
    }
}