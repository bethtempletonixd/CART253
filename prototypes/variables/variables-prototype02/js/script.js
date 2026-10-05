/**
 * Variables prototype 02
 * Beth Templeton 
 * 
 * Square rotates in the centre of the screen changing colour from 
 * red to green as it rotates. 
 */


//box position, size and colour
let box = {
    x: 0,
    y: 0,
    size: 200, 

    fill: {
        h: 360, 
        s: 100,
        b: 100
    } 
}


function setup() {
createCanvas(500, 500);
}


/**
 * red square rotating in centre of screen changes to green
*/
function draw() {
background(0);
rectMode(CENTER);
fill(box.fill.h, box.fill.s, box.fill.b);
box.fill.h = box.fill.h - 1 * 0.5;
//translate(width/2, height/2);
let angle = frameCount * 0.005;
translate(width/2, height/2);
rotate(angle);
square(box.x, box.y, box.size);
}