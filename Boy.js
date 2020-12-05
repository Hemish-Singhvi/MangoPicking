class boy {
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 150;
        this.image = loadImage("boy.png");
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
    }
    dislay(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 150, 250);
        pop();
    }
}