class Boy{
    constructor(x,y,width,height){
        this.image = loadImage("Sprites/boy.png");
        var options={
    isStatic:true,
    restitution:1,
    friction:1,
    }
    this.body = Bodies.rectangle(x, y,width,height, options);
          this.width=width;
          this.height=height;
          
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();          
          
          
          pop();
        }
      };