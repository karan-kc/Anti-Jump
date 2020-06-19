var x =0;
var y =0;
var gravity=0.5;
var xvelocity=10;
var yvelocity=10;
var yacceler=2;
var MaxWidth=1280;
var MaxHeight=720;
function setup() {
    createCanvas(1280, 720);
    img = createImg('assets/BeachBall.png');
    img.hide();
}
function draw() {
    background(0,255,255);
    image( img, x, y, 100, 100);

    if (x>(MaxWidth-100)&&xvelocity>0){
        xvelocity=-xvelocity;
    }
    if (x<0&&xvelocity<0){
        xvelocity=-xvelocity;
    }
    if (y>(MaxHeight-100)&&yvelocity>0){
        yvelocity=-yvelocity;
    }
    if (y<0&&yvelocity<0){
        yvelocity=-yvelocity;
    }
    x=x+xvelocity;
    y=y+yvelocity;
    yvelocity=yvelocity-gravity;
}
