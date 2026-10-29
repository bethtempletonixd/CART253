/**
 * Title of Project
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let shape01 = {
    x: 250,
    y: 250,
    w: 50,
    h: 200,
    colour:"#ff0000",
    pressedColour: "#001aff"
}

let shape02 = {
    x: 250,
    y: 250,
    w: 200,
    h: 50,
    colour: "#ff0da2",
    pressedColour: "#34e10d"
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
    shapes(shape01);
    shapes(shape02);
}

function shapes(object) {
    push();
    noStroke();
    rectMode(CENTER);
    fill(object.colour);
    rect(object.x, object.y, object.w, object.h);
    pop();
}

function startOver(x, y) {
    push();
    textSize(20);
    fill(255);
    text('Redraw', x, y);
    pop();
}
//change colour from red to blue when mouse is pressed
function mousePressed() {
        shape01.colour = shape01.pressedColour;
        shape02.colour = shape02.pressedColour;
}
//change back to red when mouse is released
function mouseReleased() {
    shape01.colour = "#ff0000";
    shape02.colour = "#ff0da2";
}