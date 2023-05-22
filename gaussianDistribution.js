function setup() {
  createCanvas(640, 240)
  background(255)
}

function draw() {
  const rd = randomGaussian() * 60 + width / 2
  noStroke()
  fill(200, 10)
  ellipse(rd, height / 2, 55, 55)
}
