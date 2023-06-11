class Mover {
    constructor() {
        this.location = new MPvector(random(width), random(height))
        this.velocity = new MPvector(0, 0)
    }
    update() {
        const mouseVector = new MPvector(mouseX, mouseY)
        const acceleration = MPvector.sub(mouseVector, this.location)
        acceleration.mult(1 / MPvector.sub(mouseVector, this.location).magn() ** 2)
        this.velocity.add(acceleration)
        this.location.add(this.velocity)
        const isOutofWidth = this.location.x > width || this.location.x < 0
        const isOutofHeight = this.location.y > height || this.location.y < 0;

        if (isOutofWidth) {
            this.velocity.x *= -1
        }
        if (isOutofHeight) {
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
    static add(vector) {
        const x = this.x + vector.x
        const y = this.y + vector.y
        return new MPvector(x, y)
    }
    sub(vector) {
        this.x = this.x - vector.x
        this.y = this.y - vector.y
    }
    static sub(v1, v2) {
        const x = v1.x - v2.x
        const y = v1.y - v2.y
        return new MPvector(x, y)
    }
    mult(scalar) {
        this.x *= scalar
        this.y *= scalar
    }
    static mult(scalar) {
        x = this.x * scalar
        y = this.y * scalar
        return new MPvector(x, y)
    }
    div(scalar) {
        this.x /= scalar
        this.y /= scalar
    }
    static div(scalar) {
        x = this.x / scalar
        y = this.y / scalar
        return new MPvector(x, y)
    }
    magn() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
    normalize() {
        const magn = this.magn()
        if (magn != 0) {
            this.div(this.magn())
        }
    }
    limit(max) {
        if (this.magn() > max) {
            this.normalize()
            this.div(max)
        }
    }

}


function setup() {
    createCanvas(600, 400)
    background(255)
    ball = [new Mover()]
    for (let i = 0; i < 100; i++) {
        ball.push(new Mover())
    }
}

function draw() {
    background(255)
    for (b of ball) {
        b.update()
        b.display()
    }
}