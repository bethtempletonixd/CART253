const grid = 50;
const inset = 0 + grid/2;

function setup() {
createCanvas(500, 500);
background(0);
}



function draw() {
fill(255);
rectMode(CENTER);
for (let y = 0; y < 10; y++){
    for(let x = 0; x < 10; x++){
rect(inset + x * grid, inset + y * grid, 10, 10);
}
}
}