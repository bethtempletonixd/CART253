/**
 * Variables prototype 02
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let box = {
    x: 250,
    y: 250,
    size: 200, 

    fill: {
        h: 300, 
        s: 100,
        b: 100
    } 
}

let angle = frameCount * 0.5;
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
background(0);
rectMode(CENTER);
fill(box.fill.h, box.fill.s, box.fill.b);
box.fill.h = box.fill.h - 1;
rotate(angle);
square(box.x, box.y, box.size);
}