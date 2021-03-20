class Drops{
    constructor(x,y){
        var options={
            'restitution' : 0.1,
            'friction':9,
        }
        this.body=Bodies.circle(x,y,5,options)
        this.radius=5
        World.add(world,this.body)

    }
    update(){
        var random1=Math.round(random(0,500))
        var random2=Math.round(random(0,650))

        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random1,y:random2})
        }
    }

    display(){
        fill(0,0,225)
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }

}
//{x:random(0,500),y:random(0,650)}