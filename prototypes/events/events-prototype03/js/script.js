/**
 * Continuous Line Drawing
 * Beth Templeton
 * 
 * Draw with circles by holding down the mouse and dragging it 
 * across the screen to make a drawing. Once you press the mouse 
 * again the canvas clears. It only allows you to create continuous
 * line drawings. 
 */
let painter = {
    x: 0,
    y: 0,
    size: 10
}

/**Draw canvas and background colour
*/
function setup() {
    createCanvas(500, 500);
    background ("#FFFDD0"); //colour to replicate a painters canvas
}


/**Draw circles
*/
function draw() {
    drawPainter();
}

//painter function
function drawPainter(){
    if(mouseIsPressed){
    noStroke();
    ellipseMode(CENTER);
    fill(random(255), random(255), random(255));
    circle(mouseX, mouseY, painter.size);
    }
}
//clear background when mouse is pressed
function mousePressed(){
    background("#FFFDD0");
}
