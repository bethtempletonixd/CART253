/**
 * Variables protoype 01
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//variables for ball size, position & colour
let ball = {
    x:200,
    y:0,
    size:50,
    fill: {
        h:200,
        s:100,
        b:100
    }
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(500, 500);
colorMode(HSB);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(0);
//fill(200, 100, 100);
push();
noStroke(0);
fill(ball.fill.h, ball.fill.s, ball.fill.b);
ellipseMode(CENTER);
circle(ball.x, ball.y, ball.size);
ball.y = constrain(ball.y, 0, 500);
ball.y = ball.y + 1;
pop();
}