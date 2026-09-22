// const grid = 30;
// const inset = 0 + grid/2;


function setup() {
createCanvas(500, 500);
//background(0);
colorMode(HSB);
noLoop();
}


function draw() {
    background(0);
    squiggle();
//squareGrid();
}

// function squareGrid(){
//     rectMode(CENTER);
//     fill(255);
// for (let y = 0; y < 20; y++){
//     for (let x = 0; x < 25; x++){
//         square(inset + x * grid, inset + y * grid, 20);
//     }
// }

function squiggle(){
    noFill();
    stroke(random(100, 300), 100, 100);
    beginShape();
    for (let x = 0; x < 10; x++){
        for(let y = 0; y < 10; y++){
    vertex(random(width), random(height));
    endShape(PATH);
        }
    }
}
//}