/**
 * Variables prototype 03
 * Beth Templeton 
 * 
 * Circle in the centre of the canvas that changes colour depenging
 * on mouse position on x and y axis. 
 */

let orb = {
    x: 250,
    y: 250,
    size: 300
}

/**
 * Draws canvas at 500 x 500 pixels and change colour mode to draw in HSB
*/
function setup() {
createCanvas(500, 500);
colorMode(HSB);
}


/**
 * Circle changes hue, saturation & brightness depending on mouse position.
*/
function draw() {
background(0);

//controls hue, saturation & brightness with mouse position 
let h = map(mouseX, 0, 500, 0, 360);
let s = map(mouseY, 0, 500, 0, 100);
let b = map(mouseX, mouseY, 0, 500, 0, 100); 

noStroke();
fill(h, s, b);
circle(orb.x, orb.y, orb.size);
}