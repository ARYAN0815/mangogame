class Stone{
constructor(x,y,r){
  this.image = loadImage("Sprites/stone.png");

var options={
isStatic:false,
restitution:0,
friction:1,
density:1.2,
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