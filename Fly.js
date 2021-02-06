class Fly {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.1,
        length: 15,
      };
  
      this.pointB = pointB;
      this.fly = Constraint.create(options);
      World.add(world, this.fly);
    }
    attach(body) {
      this.fly.bodyA = bodyA;
    }
  
    detach() {
      this.fly.bodyA = null;
    }
    
    
    display(){
      if(this.fly.bodyA){
         strokeWeight(0);
         var pointB = this.pointB;
         line(this.fly.bodyA.position.x,this.fly.bodyA.position.y,pointB.x,pointB.y)
      }
    }
  }
  