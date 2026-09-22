
function setup() {
createCanvas(500, 500);
background(0);
noLoop();
}


function draw() {
//background(0);
for (let i = 0; i < 150; i++){
    fill(255);
rect(random(width), random(height), 10, 30);
}
}