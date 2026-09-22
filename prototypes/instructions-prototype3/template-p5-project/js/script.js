const grid = 50;


function setup() {
createCanvas(500, 500);
background(0);
colorMode(HSB);
}


function draw() {
squareGrid();
}

function squareGrid(){
    fill(255);
for (let y = 0; y < 10; y++){
    for (let x = 0; x < 10; x++){
        square(grid + x, grid + y, 20);
    }
}
}