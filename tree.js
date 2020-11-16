class Tree{
    constructor(x,y,width,height){
        this.image = loadImage("Sprites/tree.png");
        var options={
    isStatic:true,
    restitution:1,
    friction:1,
    density:0.3
    }
    this.body = Bodies.rectangle(x, y,width,height, options);
          this.width=600;
          this.height=600;
          
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();          
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
          
          pop();
        }
      };