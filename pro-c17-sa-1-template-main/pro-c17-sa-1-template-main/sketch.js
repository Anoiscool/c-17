var box;
function setup() 
{
  createCanvas(400, 400);
  box= new Box(200,100,70,50,8)
}

function draw() 
{
  background(220);
box.show()
box.move()
}

