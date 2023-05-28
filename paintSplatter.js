function setup() {
  createCanvas(600, 600)
  background(255)
}

function draw() {
  const rdx = randomGaussian() * 20 + width / 2
  const rdy = randomGaussian() * 20 + height / 2
  const red = randomGaussian() * 100 + 127.5
  const green = randomGaussian() * 100 + 127.5
  const blue = randomGaussian() * 100 + 127.5
  noStroke()
  fill(red, green, blue, 90)
  ellipse(rdx, rdy, 5, 5)
}
