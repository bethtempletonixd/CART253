/**
 * Variables prototype 03
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

let orb = {
    x: 250,
    y: 250,
    size: 300
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(500, 500);
colorMode(HSB);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(0);

let c = map(mouseX, 0, 500, 0, 360);

noStroke();
fill(c, 100, 100);
circle(orb.x, orb.y, orb.size);
}