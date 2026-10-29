/**
 * Geometric print
 * Beth Templeton 
 * 
 * Draw different colour circles and different stroke weight rectangles to make a geometric print.
 */


let blob1 = {
    x: 100,
    y: 300,
    size: 50,
    colour: "#f90b0b"
}

let blob2 = {
    x: 250,
    y: 250,
    size: 200,
    colour: "#f90b52"
}

let blob3 = {
    x: 300,
    y: 150,
    size: 100,
    colour: "#08e844"
}

let blob4 = {
    x: 400,
    y: 450,
    size: 150,
    colour: "#ff8000"
}

let blob5 = {
    x: 100,
    y: 100,
    size: 100,
    colour: "#ffdd02"
}
/**
 * draw 500 by 500 pixel canvas and make background blue
*/
function setup() {
    createCanvas(500, 500);
    background("#0b70f5")
}


/**
 * draw multiple circles and rectangles in different sizes, positions, colours and stroke weights. 
*/
function draw() {
    drawCircle(blob2);
    drawCircle(blob1);
    drawCircle(blob3);
    drawCircle(blob4);
    drawCircle(blob5);
    
    drawRect(100, 360, 200, 80, 3);
    drawRect(400, 50, 50, 100, 4);
    drawRect(425, 75, 50, 100, 2);
    drawRect(75, 340, 50, 150, 5);
    drawRect(270, 410, 50, 50, 1);
}
//draw circle 
function drawCircle(painting) { //control size, position and colour
    push();
    noStroke();
    fill(painting.colour);
    ellipse(painting.x, painting.y, painting.size);
    pop();
}
//draw rectangle/square
function drawRect(x, y, w, h, sw) { //control size, position and stroke weight 
    push();
    stroke(0);
    strokeWeight(sw);
    noFill();
    rect(x, y, w, h);
    pop();
}