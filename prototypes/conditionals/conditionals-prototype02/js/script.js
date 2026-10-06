/**
 * Title of Project
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

let ball = {
    x: 250,
    y: 250,
    size: 200,
    fillStates: {
        pressed: "#a604b8",
        notPressed: "#ff008c"
    },
    currentFill: "#ff008c",
    currentStroke: "#ff008c",
    strokeStates: {
        pressed: "#000000",
        notPressed: "#ff008c"
    }
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
    colourChange();
    drawBall();
}

function drawBall() {
    noStroke();
    fill(ball.currentFill);
    stroke(ball.currentStroke);
    strokeWeight(3);
    circle(ball.x, ball.y, ball.size);
}

function colourChange() {
    let distance = dist(ball.x, ball.y, mouseX, mouseY);

    if(distance < ball.size/2 && mouseIsPressed){
        ball.currentFill = ball.fillStates.pressed;
        ball.currentStroke = ball.strokeStates.pressed;
    }
    else{
        ball.currentFill = ball.fillStates.notPressed;
        ball.currentStroke = ball.strokeStates.notPressed;
    }

}