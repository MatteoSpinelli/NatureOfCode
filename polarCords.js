let alpha = 0
let r = 100
function setup(){
    createCanvas(400, 400)
    angleMode(DEGREES)
    background(255)
    frameRate(40)
   
}

function draw(){
    background(255)
    fill(255)
    circle(200, 200, 240)
    fill(0)
    circle(200 + cos(alpha) * r, 200 + sin(alpha) * r, 40)
    alpha -= 3
}