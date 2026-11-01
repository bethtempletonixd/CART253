/**
 * My second prototype
 * Beth Templeton 
 * 
 * Cycles through a sentence displaying each word when the mouse is pressed.
 */

//array holding string of words
const words = ["This", "is", "my", "second", "prototype", "as", "part", "of", "my", "arrays", "prototyping", "assignment", ":)"];

let wordsIndex = 0; //keeps track of what text is displayed
/**
 * create canvas at 500 by 500 pixels
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Draw text on the middle of the canvas
*/
function draw() {
    background(0);
    push();
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255);
    text(words[wordsIndex], 250, 250);
    pop();
}
//when mouse is pressed each time it cycles through the array of words and displays a different word on the canvas
function mousePressed() {
    if (wordsIndex < words.length -1){
        wordsIndex++;
    }
    else{
        wordsIndex = 0; //makes the words cycle back to the start 
    }
}