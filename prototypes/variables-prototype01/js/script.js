/**
 * Variables protoype 01
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//variables for ball01 size, position & colour
let ball01 = {
    x:200,
    y:0,
    size:50,
    fill: {
        h:200,
        s:100,
        b:100
    }
}

//variables for ball01 size, position & colour
let ball02 = {
    x:100,
    y:0,
    size:100,
    fill: {
        h:350,
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
background(0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
//background(0);

push();
noStroke();
fill(ball01.fill.h, ball01.fill.s, ball01.fill.b);
ellipseMode(CENTER);
circle(ball01.x, ball01.y, ball01.size);
ball01.y = constrain(ball01.y, 0, 500);
ball01.y = ball01.y + 1;
pop();

push();
noStroke();
fill(ball02.fill.h, ball02.fill.s, ball02.fill.b);
ellipseMode(CENTER);
circle(ball02.x, ball02.y, ball02.size);
ball02.y = constrain(ball02.y, 0, 500);
ball02.y = ball02.y + 0.5;
pop();
}