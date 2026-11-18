/**
 * Beth Templeton
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
const grid = 20;
//const inset = 0 + grid/2;

let shapes = [];

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
    // translate(width/2, height/2);
    // translate(-width/2, -height/2);
    //let rectSize = slider.value();
    for(let x = 0; x < 50; x++){
        for(let y = 0; y < 50; y++){
   // rectMode(CENTER);
    fill(255);
    rect(x * grid, y * grid, 100, 100);
    }
}
}