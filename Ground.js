class Ground{
    constructor (){
  var options={
      isStatic:true
  }
      this.body = Bodies.rectangle(1,370,400,50,options);
      World.add(myWorld,this.body);
      
    }
display()
    {
        var pos = this.body.position;
       fill("blue");
        rect(pos.x,pos.y,400,30);
    }
}