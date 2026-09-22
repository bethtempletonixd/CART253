
function setup() {
createCanvas(500, 500);
background(0);
noLoop();
}


function draw() {
background(0);
for (let i = 0; i < 150; i++){
    noStroke();
    fill(random(255)); //different shades of white
rect(random(width), random(height), 10, 30);
}
}

function mousePressed(){
    redraw(); //everytime the mouse is clicked the graphics on screen change
}