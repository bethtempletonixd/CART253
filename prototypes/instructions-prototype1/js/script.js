const grid = 50; //how spaced the shapes are
const inset = 0 + grid/2;//inset from outside of canvas

function setup() {
createCanvas(500, 500);
background(0);
}



function draw() {
fill(255);
rectMode(CENTER);
for (let y = 0; y < 10; y++){//draw y axis of 10 squares
    for(let x = 0; x < 10; x++){//draw x axis of 10 squares
rect(inset + x * grid, inset + y * grid, 10, 10);
}
}
}