/**
 * Title of Project
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let shape = {
    x: 200,
    y: 200,
    w: 50,
    h: 200,
    colour:"#ff0000"
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
    shape01(shape);
    let d = dist(mouseX, mouseY, shape.x, shape.y);
    if(d < shape.size/2){
        fill(255);
    }
    else{
        fill(shape.colour);
    }
}

function shape01(object) {
    push();
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