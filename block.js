class Block{
    constructor(x, y, width, height) {
        var options = {
          friction:0.4,
          restitution: 0.3,
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        this.image = loadImage("block.png");
        World.add(world, this.body);
      }
      display(){
 
        var pos= this.body.position;
      
    
        if(this.body.speed < 5){
         imageMode(CENTER);
         image(this.image, pos.x, pos.y, this.width, this.height)
         }
         else{
           World.remove(world, this.body);
           push();
           this.visiblity = this.visiblity - 5;
           tint(255,this.visiblity);
           image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
           pop();
         }
       
      }
}
