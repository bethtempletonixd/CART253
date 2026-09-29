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

//variables for ball02 size, position & colour
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

//variables for ball03 size, position & colour
let ball03 = {
    x:300,
    y:0,
    size:200,
    fill: {
        h:50,
        s:100,
        b:100
    }
}
/**
 * Draw canvas and change colour mode to use HSB colours
*/
function setup() {
createCanvas(500, 500);
colorMode(HSB);
background(0);
}


/**
 * Drawing balls falling from the top of the canvas at different speeds
*/
function draw() {
filter(BLUR);//adds a blur to balls

//draw ball01
push();
noStroke();
fill(ball01.fill.h, ball01.fill.s, ball01.fill.b);
ellipseMode(CENTER);
circle(ball01.x, ball01.y, ball01.size);
ball01.y = constrain(ball01.y, 0, 500);
ball01.y = ball01.y + 1;
pop();


//draw ball02
push();
noStroke();
fill(ball02.fill.h, ball02.fill.s, ball02.fill.b);
ellipseMode(CENTER);
circle(ball02.x, ball02.y, ball02.size);
ball02.y = constrain(ball02.y, 0, 500);
ball02.y = ball02.y + 0.5;
pop();

//draw ball03
push();
noStroke();
fill(ball03.fill.h, ball03.fill.s, ball03.fill.b);
ellipseMode(CENTER);
circle(ball03.x, ball03.y, ball03.size);
ball03.y = constrain(ball03.y, 0, 500);
ball03.y = ball03.y + 0.25;
pop();
}