class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         this.image= loadImage("block.png")
         this.visiablety=255
        World.add(world, this.body);
      }

      display(){

        var pos= this.body.position;
        imageMode(CENTER);

        if(this.body.speed <3){
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
        else{
             push()
           World.remove(world,this.body);
          this.visiablety=this.visiablety-10
          tint(255,this.visiablety)
      image(this.image,this.body.position.x,this.body.position.y,30,40)
      pop()
        }


        }
}