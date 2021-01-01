class Mango {
    constructor(x, y) {
      var options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("Plucking mangoes/mango.png");
      World.add(world, this.body);
    }
    display(){
     
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      image(this.image,0,0,this.width,this.height);
     
      pop();
    }
  };
  