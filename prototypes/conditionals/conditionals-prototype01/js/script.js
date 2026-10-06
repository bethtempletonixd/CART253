/**
 * Square colour change
 * Beth Templeton 
 * 
 * Once mouse is inside the square the colour changes from yellow to red and changes back to yellow
 * once the mouse is outside the square.
 */

//variables for square size, position and fill
let square = {
    x: 0,
    y: 0,
    size: 200,
    fillStates: {
        hit: "#FF0000",
        miss: "#ffee00"
    },
    currentFill: "#ffee00"
}

/**
 * draw canvas 500 x 500 pixels
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * change colour of square from red to yellow depending if mouse is inside the shape
*/
function draw() {
    background(255);
    squareFill();
    drawSquare();
}
//draw square
function drawSquare(){
    //push();
    fill(square.currentFill);
    noStroke();
    rectMode(CENTER);
    translate(width/2, height/2);
     let angle = frameCount * 0.025;
    rotate(angle);
    rect(square.x, square.y, square.size);
    // let angle = frameCount * 0.025;
    // rotate(radians);
    //pop();
}
//change square fill from yellow to red with mouse position
function squareFill() {
    let distance = dist(mouseX, mouseY, width/2, height/2);
    if(distance < square.size/2){
        square.currentFill = square.fillStates.hit;
    }
    else{
        square.currentFill = square.fillStates.miss;
    }
}