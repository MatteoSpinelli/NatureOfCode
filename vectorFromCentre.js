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

function setup(){
    createCanvas(600, 400)
    background(255)
}

function draw(){
    background(255)
    translate(300, 200)
    lineVector = new MPvector(mouseX, mouseY)
    mouseVector = new MPvector(300, 200)
    lineVector.sub(mouseVector)
    line(0, 0, lineVector._x, lineVector._y)
}