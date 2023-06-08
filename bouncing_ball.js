class MPvector {
    constructor(x, y) {
        this._x = x
        this._y = y
    }

    add(vector) {
        this._x = this._x + vector._x
        this._y = this._y + vector._y
    }
    sub(vector) {
        this._x = this._x - vector._x
        this._y = this._y - vector._y
    }
    mult(scalar) {
        this._x *= scalar
        this._y *= scalar
    }
    div(scalar) {
        this._x /= scalar
        this._y /= scalar
    }
    mag() {
        return Math.sqrt(this._x ** 2 + this._y ** 2)
    }
    normalize() {
        const magn = mag()
        magn && this.div(mag())
    }
}

let loc = new MPvector(100, 100)
let velocity = new MPvector(1, 3.3)
let ball


function setup() {
    createCanvas(400, 400)
    background(255)

}

function draw() {
    background(255)
    ball = circle(loc._x, loc._y, 40)
    loc.add(velocity)
    if ((loc._x + 20) > width || (loc._x - 20) < 0) {
        velocity._x *= -1
    }
    if ((loc._y + 20) > height || (loc._y - 20) < 0) {
        velocity._y *= -1
    }
}