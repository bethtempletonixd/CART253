/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
let painter = {
    x: 0,
    y: 0,
    size: 20
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    background ("#FFFDD0");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawPainter();
}


function drawPainter(){
    if(mouseIsPressed){
    noStroke();
    ellipseMode(CENTER);
    fill(random(255), random(255), random(255));
    circle(mouseX, mouseY, painter.size);
    }
}

function mousePressed(){
    background("#FFFDD0");
}
