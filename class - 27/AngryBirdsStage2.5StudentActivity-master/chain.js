class Chain {
constructor(body1,body2){
    var chain = {
        bodyA: body1,
        bodyB: body2,
        stiffness: 0.3,
        length : 10
    }
    this.body = Constraint.create(chain);
    World.add(world, this.body);
   
    this.b1 = body1;
    this.b2 = body2;
}

display(){
    line(this.b1.position.x, this.b1.position.y, this.b2.position.x, this.b2.position.y,);
}
}