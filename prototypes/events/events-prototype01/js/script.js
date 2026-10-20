/**
 * Title of Project
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
let pumpkin = {
    x: 250,
    y: 250, 
    size: 200,
    currentFill: "#f69503"
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    background(0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
     drawPumpkin();
}

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

function drawPumpkin() {
    noStroke();
        fill(pumpkin.currentFill);
    circle(pumpkin.x, pumpkin.y, pumpkin.size);
    //draw eyes
     fill(0);
     triangle(240, 270, 210, 220, 180, 270);
     triangle(260, 270, 290, 220, 320, 270);
     //draw mouth
    stroke(0);
    strokeWeight(5);
    line(220, 300, 280, 300);
}