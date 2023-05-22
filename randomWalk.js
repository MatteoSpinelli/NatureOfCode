class Walker{
    constructor(x = width / 2, y = height / 2){
        this.x = x
        this.y = y
    }
    display(){
        stroke(0)
        point(this.x, this.y)
    }
    step(){
        let stepx = int(random() * 3) - 1
        let stepy = int(random() * 3) - 1
        const prob = random()
        if (prob <= 0.5){
            stepx = mouseX > (width / 2) ? 1 : -1
            stepy = mouseY > (height / 2) ? 1 : -1
        }
        this.x += stepx
        this.y += stepy
    }
}
class WalkerBias{
    constructor(x = width / 2, y = height / 2){
        this.x = x
        this.y = y
    }
    display(){
        stroke(0)
        point(this.x, this.y)
    }
    step(){
        let  stepx = int(random(4)) - 1 // 0, 1, 2, 3 => -1, 0, 1, 2 
        let  stepy = int(random(4)) - 1
        this.x += stepx
        this.y += stepy
    }
}

let ws = []

function setup(){
    createCanvas(400, 400)
    background(255)
    for (i = 0; i < 50; i++){
        ws.push(new Walker(random(width), random(height)))
    }
}

function draw(){
    for (walker of ws){
        walker.step()
        walker.display()
    }
}