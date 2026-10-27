/**
 * Title of Project
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    background("#0b70f5")
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawCircle(width/2, height/2, 200, "#f90b0b");
    drawCircle(100, 300, 50, "#f50b97");
    drawCircle(300, 150, 100, "#08e844");
    drawCircle(400, 450, 150, "#ff8000");
    drawCircle(100, 100, 100, "#ffdd02");
}

function drawCircle(x, y, size, colour) {
    push();
    noStroke();
    fill(colour);
    ellipse(x, y, size);
    pop();
}