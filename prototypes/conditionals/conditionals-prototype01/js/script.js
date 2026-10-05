/**
 * Title of Project
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

let square = {
    x: 250,
    y: 250,
    size: 200,
    fillStates: {
        hit: "#FF0000",
        miss: "#ffee00"
    },
    currentFill: "#ffee00"
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255);
    drawSquare();
    squareFill();
}

function drawSquare(){
    fill(square.currentFill);
    noStroke();
    rectMode(CENTER);
    rect(square.x, square.y, square.size);
}

function squareFill() {
    let distance = dist(mouseX, mouseY, square.x, square.y);
    if(distance < square.size/2){
        square.currentFill = square.fillStates.hit;
    }
    else{
        square.currentFill = square.fillStates.miss;
    }
}