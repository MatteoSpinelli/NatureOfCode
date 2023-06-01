let z = 0
let b = 0
function setup(){
    createCanvas(600, 600)
    background(255)
    
}

function draw(){
    let xoff = 0
    let yoff = 0
    loadPixels()
    pixelDensity(1)
    for (let x = 0; x < width; x++){
        yoff = 0
        for (let y = 0; y < height; y++){
            let brightness = map(noise(xoff, yoff, z), 0, 1, 0, 255)
            index = (x + y*width)*4
            pixels[index + 3] = brightness
            pixels[index + 2] = map(noise(xoff + 1, yoff + 3, z), 0, 1, 0, 255)
            pixels[index + 1] = map(noise(xoff + 2, yoff + 4), 0, 1, 0, 255)
            pixels[index] = map(noise(xoff + 20, yoff -10), 0, 1, 0, 255)
            yoff += 0.03
        }
        xoff += 0.03
    }
    updatePixels()
    z += 0.7
    b += 70
}