class stone {
    constructor(x, y){
        var options = {
            restitution:1
        }
        this.x = x;
        this.y = y;
        this.radius = 7.5;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 35);
    }
}