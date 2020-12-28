class Bob{
    constructor(x,y){
        var option={
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8,
        }
        this.body=Bodies.circle(x,y,25,option);
        World.add(world, this.body);
    }
    display(){
        var bobpos=this.body.position;
        
        push();
        ellipseMode(RADIUS);
        fill(254,0,255);
        ellipse(bobpos.x,bobpos.y,25,25);
        pop();

    }
}