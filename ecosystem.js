class Flyer {
    constructor(){
        this.location = new p5.Vector(random(width / 2), random(height / 2))
        this.velocity = new p5.Vector(0, 0)
    }
    display(){
        noStroke()
        fill(120)
        ellipse(this.location.x, this.location.y, 4)
    }
    update(){
        const acceleration = new p5.Vector(random(-1, 1), random(-1, 1))
        this.velocity.add(acceleration)
        this.location.add(this.velocity)
        this.velocity.limit(3)
        this.checkEdges()
    }
    checkEdges(){
        this.location.x > width && (this.velocity.x *= -1)
        this.location.y > height && (this.velocity.y *= -1)
        this.location.x < 0 && (this.velocity.x *= -1)
        this.location.y < 0 && (this.velocity.y *= -1)
    }
}

const flyers = []


function setup(){
    createCanvas(600, 600)
    background(255)
    flyers.push(new Flyer())
}

function draw(){
    background(255)
    for (fly of flyers){
        fly.display()
        fly.update()
    }
}