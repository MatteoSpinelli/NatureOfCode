class Walker {
    constructor(x = width / 2, y = height / 2) {
        this.tx = 0
        this.ty = 10000
        this.x = x
        this.y = y
    }
    display() {
        stroke(0)
        circle(this.x, this.y, 30)
    }
    step() {
        let stepx = noise(this.tx) * width
        let stepy = noise(this.ty) * height
        this.x = stepx
        this.y = stepy
        this.tx += 0.01
        this.ty += 0.01
    }
}


let ws
function setup() {
    createCanvas(400, 400)
    background(255)
    ws = new Walker(random(width), random(height))
}

function draw() {
    ws.step()
    ws.display()
}