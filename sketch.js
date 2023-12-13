var mover;
var attracter;
var k = 10 ** 1;
var n = 1;
var x = 225;
var y = 0;
var v_x = 0;
var v_y = 1;

document.getElementById("param_k").innerHTML = toString(k);

function setup() {
  createCanvas(800, 800); 
  background(0);
  attracter = new Attracter (k,n);
  mover = new Mass(width / 2 + x, height / 2 - y, v_x, -v_y, 10);
}

function draw() {
  attracter.attract (mover);
  attracter.update ();
  mover.update ()
  mover.show()
}
