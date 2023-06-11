class Mover {
    constructor(){
        this.location = new MPvector(width / 2, height / 2)
        this.velocity = new MPvector(0, 0)
        this.acceleration = new MPvector(0.01, 0.001)
    }
    update() {
        this.velocity.add(this.acceleration)
        this.location.add(this.velocity)
        const isOutofWidth = this.location.x > width || this.location.x < 0
        const isOutofHeight = this.location.y > height || this.location.y < 0;

        if (isOutofWidth){
            this.velocity.x *= -1
        }
        if (isOutofHeight){
            this.velocity.y *= -1
        }
        this.velocity.limit(5)
    }
    display() {
        stroke(0)
        fill(175)
        ellipse(this.location.x, this.location.y, 16, 16)
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
    createCanvas(600, 400)
    background(255)
    ball = new Mover()
}

function draw() {
    background(255)
    ball.update()
    ball.display()
}