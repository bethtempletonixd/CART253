/**
 * Title of Project
 * Beth Templeton
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let blob = {
    colour: "rgb(240, 19, 93)",
    size: 200
}

/**
 * draw 500 by 500 pixel canvas with a white background
*/
function setup() {
    createCanvas(500, 500);
    background(255);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}

function mousePressed() {
    drawBlob(mouseX, mouseY, blob.size);
}

function drawBlob(x, y) {
    push();
    //noStroke();
    fill(blob.colour);
    ellipse(x, y, random(25, blob.size));
    pop();
}

