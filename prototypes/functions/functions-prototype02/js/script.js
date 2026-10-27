/**
 * Pink circles
 * Beth Templeton
 * 
 * Draw pink circles where mouse is when pressed.
 */

"use strict";
//variables for circle colour and size
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
 * draw is empty because mousePressed function is where the circles are drawn
*/
function draw() {

}
//draw circles where mouse is when pressed
function mousePressed() {
    drawBlob(mouseX, mouseY, blob.size);
}
//draw pink circle in different sizes 
function drawBlob(x, y) {
    push();
    //noStroke();
    fill(blob.colour);
    ellipse(x, y, random(25, blob.size));
    pop();
}

