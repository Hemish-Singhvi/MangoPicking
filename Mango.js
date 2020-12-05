class mango {
    constructor(x, y) {
        var options = {
            density: 1.2,
            restitution: 0.1,
            isStatic: true
        }
        this.width = 10;
        this.height = 15;
        this.x = x;
        this.y = y;
        this.image = loadImage("mango.png");        
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);        
        World.add(world, this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 75);
        pop();
    }
}