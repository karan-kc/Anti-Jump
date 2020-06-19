// Algorithm based on https://www.youtube.com/watch?v=F9LUPoH400M
let x, y, vx, vy, diameter

let bounce = 0.6 //max 0.9
let gravity = 0.9 // max 1
let Friction = 0.09;

let ball;

function xF() {
  if (vx > 0)
    vx = vx - Friction;
  if (vx < 0)
    vx = vx + Friction;
}

function mouseClicked() {
  vx = random(-20, 20) //speed and direction when mouse is clicked
  diameter = random(10,100)
  x = mouseX
  y = mouseY

}

function setup() {
  createCanvas(750, 750);
  background(200, 200, 200)
  strokeWeight(3)
  fill(112, 48, 160)
  stroke(255, 255, 255)
  
  
  
  vx = random(-20, 20) //speed and direction
  vy = 0
  diameter = random(10,100)
  x = random(diameter, width - diameter)
  y = random(diameter, height - diameter)

  textSize(14)
}

function draw() {
  background(220);


  x += vx
  y += vy
  vy += gravity

  if (x < 0 + diameter / 2 || x > width - diameter / 2) {

    vx *= -1

  }




  if (y + diameter / 2 > height) {
    y = height - diameter / 2
    vy *= -bounce

  }

  if (vy < 0 && vy > -2.1) {
    vy = 0

  }

  xF()
  circle(x, y, diameter)
}