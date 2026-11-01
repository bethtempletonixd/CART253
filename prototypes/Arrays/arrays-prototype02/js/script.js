/**
 * Title of Project
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

const words = ["this", "is", "my", "second", "prototype", "as", "part", "of", "my", "arrays", "prototyping", "assignment"];

let wordsIndex = 0;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    background(0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    push();
    textSize(32);
    fill(255);
    text(words[wordsIndex], 250, 250);
    pop();
}

function mousePressed() {
    if (wordsIndex < words.length -1){
        wordsIndex++;
    }
}