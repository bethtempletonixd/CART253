/**
 * Geometric print
 * Beth Templeton 
 * 
 * Draw different colour circles and different stroke weight rectangles to make a geometric print.
 */


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
    drawCircle(width/2, height/2, 200, "#f90b0b");
    drawCircle(100, 300, 50, "#f50b97");
    drawCircle(300, 150, 100, "#08e844");
    drawCircle(400, 450, 150, "#ff8000");
    drawCircle(100, 100, 100, "#ffdd02");
    
    drawRect(100, 360, 200, 80, 3);
    drawRect(400, 50, 50, 100, 4);
    drawRect(425, 75, 50, 100, 2);
    drawRect(75, 340, 50, 150, 5);
    drawRect(270, 410, 50, 50, 1);
}
//draw circle 
function drawCircle(x, y, size, colour) { //control size, position and colour
    push();
    noStroke();
    fill(colour);
    ellipse(x, y, size);
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