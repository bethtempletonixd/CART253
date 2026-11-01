/**
 * Title of Project
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

const words = ["This", "is", "my", "second", "prototype", "as", "part", "of", "my", "arrays", "prototyping", "assignment", ":)"];

let wordsIndex = 0;
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
    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text(words[wordsIndex], 250, 250);
    pop();
}

function mousePressed() {
    if (wordsIndex < words.length -1){
        wordsIndex++;
    }
    else{
        wordsIndex = 0;
    }
}