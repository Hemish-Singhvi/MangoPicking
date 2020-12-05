class Tree {
    constructor(x, y) {
        var options = {
            'isStatic':true
        }
        this.x = x;
        this.y = y;
        this.width = 600;
        this.height = 500;
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        //World.add(world, this.body);
    }
    dislay(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 600, 600);
        pop();
    }
}