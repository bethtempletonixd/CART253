/**
 * Pink, yellow and purple circles
 * Beth Templeton
 * 
 * Draw pink circles with smaller purple circle and yellow stroke where mouse is when pressed.
 */

"use strict";
//variables for circles colour 
let blob = {
    outisdeColour: "rgb(240, 19, 93)",
    insideColour: "#c50be6"
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
    drawBlob(mouseX, mouseY, 100);
}
//draw pink circle with purple circle inside and yellow stroke
function drawBlob(x, y, size) {
    push();
    stroke("#f6ff00")
    strokeWeight(5);
    fill(blob.outisdeColour);
    ellipse(x, y, size);
    pop();
    push();
    fill(blob.insideColour);
    noStroke();
    ellipse(x, y, size/2);
    pop();
}

