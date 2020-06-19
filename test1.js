var x =0;
var y =0;
var xvelocity=10;
var yvelocity=10;
var gravity=0.5;
var bounce=0.9;
var Friction = 0.09;
var MaxWidth=1280;
var MaxHeight=720;
function setup() {
    createCanvas(1280, 720);
    img = createImg('assets/BeachBall.png');
    img.hide();
}
function keyPressed() {
    if (keyCode === 32){
        yvelocity -= 30;
    }
    if (keyCode === 39){
        xvelocity += 10;
    }
    if (keyCode === 37){
        xvelocity -= 10;
    }
}
function draw() {
    background(0,0,255);
    image( img, x, y, 100, 100);



    if (x>=(MaxWidth-100)&&xvelocity>0){
        xvelocity=-xvelocity;
    }
    if (x<0&&xvelocity<0){
        xvelocity=-xvelocity;
    }
    if (y+100> height) {
        y = height-100;
        yvelocity *= -bounce;
    }
    if (y<0) {
        yvelocity *= -bounce;
    }

    if (yvelocity > 0.0001 && yvelocity < -2.1) {
        yvelocity = 0
    }

    if (xvelocity > 0)
        xvelocity = xvelocity - Friction;
    if (xvelocity < 0)
        xvelocity = xvelocity + Friction;
    x=x+xvelocity;
    y=y+yvelocity;
    yvelocity=yvelocity-gravity;
}
