class Mover {
    constructor(){
        this.location = new MPvector(width / 2, height - 70)
        this.velocity = new MPvector(0, -2)
        this.acceleration = new MPvector(0, 0)
    }
    update() {
        this.velocity.add(this.acceleration)
        this.location.add(this.velocity)
        this.acceleration.mult(0)
        this.checkCeil()
        this.velocity.limit(5)
    }
    addForce(force){
        this.acceleration.add(force)
    }
    bounce() {
        this.addForce(new MPvector(0, -0.04))
    }
    display() {
        stroke(0)
        fill(175)
        ellipse(this.location.x, this.location.y, 64, 64)
    }
    checkCeil(){
        if (this.location.y < 32){
            this.addForce(new MPvector(0, 2))
        }
    }
}

class MPvector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    add(vector) {
        this.x = this.x + vector.x
        this.y = this.y + vector.y
    }
    sub(vector) {
        this.x = this.x - vector.x
        this.y = this.y - vector.y
    }
    mult(scalar) {
        this.x *= scalar
        this.y *= scalar
    }
    div(scalar) {
        this.x /= scalar
        this.y /= scalar
    }
    magn() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
    normalize() {
        const magn = this.magn()
        if (magn != 0){
            this.div(this.magn())
        }
    }
    limit(max){
        if (this.magn() > max){
            this.normalize()
            this.div(max)
        }
    }
}


function setup() {
    createCanvas(300, 300)
    background(255)
    ball = new Mover()
}

function draw() {
    background(255)
    ball.display()
    ball.update()
    stroke(175)
   
    line(ball.location.x, ball.location.y, ball.location.x, ball.location.y + 100)
}