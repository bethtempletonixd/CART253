/**
 * Scary pumpkin
 * Beth Templeton 
 * 
 * Move mouse to make scary text appear around the pumpkin. 
 */

//variables for pumpkin size, position and colour
let pumpkin = {
    x: 250,
    y: 250, 
    size: 200,
    currentFill: "#f69503"
}

/**
 * draw canvas and make background black
*/
function setup() {
    createCanvas(500, 500);
    background(0);
}


/**
 * draw pumpkin on canvas
*/
function draw() {
     drawPumpkin();
}

//move mouse to make text appear
function mouseMoved() {
    if(mouseMoved){
    fill(255);
    textAlign(CENTER);
    textSize(40);
    text("BOO!", random(width), random(height));
    }
    else{
        background(0);
    }
    
}

//draw pumpkin function 
function drawPumpkin() {
    noStroke();
        fill(pumpkin.currentFill);
    circle(pumpkin.x, pumpkin.y, pumpkin.size);
    //draw eyes
     fill(0);
     triangle(240, 260, 210, 210, 180, 260);
     triangle(260, 260, 290, 210, 320, 260);
     //draw mouth
    // stroke(0);
    // strokeWeight(5);
    // line(220, 300, 280, 300);
    rectMode(CENTER);
    rect(250, 300, 80, 20);
}