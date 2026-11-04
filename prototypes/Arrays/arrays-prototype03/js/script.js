/**
 * Random letters
 * Beth Templeton
 * 
 * Draws random letters at rando positions on screen with random colours. By pressing the mouse 
 * you can add more letters.
 */

//array holding letters of the alphabet
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
/**
 * Draw canvas and background 
*/
function setup() {
    createCanvas(500, 500);
    background(0);
    noLoop();
}


/**
 * Draw individual letters at random positions and random colours on the canvas
*/
function draw() {
    for(letter of letters){
    textSize(50);
    fill(random(255), random(255), random(255));
    text(letter, random(width), random(height));
    }
}
//add more letters to canvas
function mousePressed() {
    redraw();
}