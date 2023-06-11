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

function setup(){}

function draw(){}