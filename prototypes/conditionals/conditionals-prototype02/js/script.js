/**
 * Ball colour change
 * Beth Templeton 
 * 
 * Circle that changes fill colour and stroke colour once mouse is pressed while inside the circle. 
 * Changes colour from pink to purple with a black stroke.
 */

//Variables to control ball size, position, fill colour and stroke colour
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
 * Draw canvas at 500 by 500 pixels.
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Draw pink circle in centre of canvas that changes colour to purple and adds a black stroke 
 * once pressed with the mouse. 
*/
function draw() {
    background(255);
    colourChange();
    drawBall();
}
//Draw ball
function drawBall() {
    noStroke();
    fill(ball.currentFill);
    stroke(ball.currentStroke);
    strokeWeight(3);
    circle(ball.x, ball.y, ball.size);
}
//Control colour change 
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