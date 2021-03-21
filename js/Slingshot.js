class Slingshot {
    constructor(body, anchor) {
     var options = {
         bodyA: body,
         pointB: anchor,
         length: 10,
         stiffness: 0.004
     }
     this.sling = Constraint.create(options);
     this.pointB = anchor;
     this.bodyA = body;
     World.add(world, this.sling);
              
 }   

     fly() {
        this.sling.bodyA = null;
    }

    attach(body) {
        this.sling.bodyA = body; 
    }

    display() {

        if (this.sling.bodyA) {
            //this point is referring to bodyA
            var pointA = this.bodyA.position;
            //this point is referring to point property
            var pointB = this.pointB;
            push();
            strokeWeight(6);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //line(x1,y1,x2,y2);
            pop();
        }
        
        
    }

}
