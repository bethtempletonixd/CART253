
function setup() {
createCanvas(500, 500);
background(0);
noLoop();
colorMode(HSB);
}


function draw() {
background(0);
for (let i = 0; i < 1000; i++){
    noStroke();
    fill(random(300), 180, 200); //different shades of white
    rotate(random(TWO_PI));
rect(random(width), random(height), 20, 60);
}
}

function mousePressed(){
    redraw(); //everytime the mouse is clicked the graphics on screen change
}