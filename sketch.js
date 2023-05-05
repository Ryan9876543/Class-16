class  Box {
  constructor () {
    this.x = 100;
    this.y = 200;
    this.w = 50
    this.h = 50
  }

  show () {
    rect (this.x,this.y,this.w,this.h)
  }

  setSpeed(v) {
    this.x = this.x + v
  }
}

var box1;
var box2;

function setup() {
  createCanvas(600, 400);
  box1 = new Box ()
  box2 = new Box ()
  
}

function draw() {
  background(220);
  box1.show()
  box1.setSpeed(1)
  box2.show()
  box2.setSpeed(3)

}

