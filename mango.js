class Mango{
    constructor(x,y,r){
        this.image = loadImage("Sprites/mango.png");
        var options={
    isStatic:true,
    restitution:0,
    friction:1,
    }
    this.body = Bodies.circle(x, y,r, options);
          this.r=r;
          
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,this.r *2,this.r *2);
          
          pop();
        }
      };