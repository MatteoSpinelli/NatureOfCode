function squaredRandom() {
    while (true) {
        let r1 = random()
        let p = r1 ** 2
        let r2 = random()
        if (r2 < p) {
            return r1
        }
    }
}

class Walker {
    constructor(x = width / 2, y = height / 2) {
        this.x = x
        this.y = y
    }
    display() {
        stroke(0)
        point(this.x, this.y)
    }
    step() {
        let stepsize = squaredRandom() * 2

        let stepx = random(-stepsize, stepsize)
        let stepy = random(-stepsize, stepsize)
        this.x += stepx
        this.y += stepy
    }
}

let ws = []

function setup() {
    createCanvas(400, 400)
    background(255)
    for (i = 0; i < 50; i++) {
        ws.push(new Walker(random(width), random(height)))
    }
}

function draw() {
    for (walker of ws) {
        walker.step()
        walker.display()
    }
}