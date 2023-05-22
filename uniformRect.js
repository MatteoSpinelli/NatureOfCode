const randomCount = []
function setup(){
    createCanvas(640, 240)
    background(255)
    for (i = 0; i < 20; i++){
        randomCount.push(0)
    }
}

function draw(){
    translate(0, height)
    x = int(random(20))
    randomCount[x] += random()
    const w = width / randomCount.length
    stroke(0)
    fill(230)
    randomCount.forEach((count, i) => {
        rect(i * w, 0, w, -count)
    })
}