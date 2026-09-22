


function setup() {
createCanvas(500, 500);
//background(0);
colorMode(HSB);
noLoop();
}


function draw() {
    background(0);
    squiggle01();//colourful thinner "squiggle"
    squiggle02();//thicker white "squiggle"
    }


function squiggle01(){
    push();
    noFill();
    stroke(random(100, 300), 100, 100);//blues, greens, purple side of colour wheel
    beginShape();
    for (let x = 0; x < 10; x++){
        for(let y = 0; y < 10; y++){
    vertex(random(width), random(height));
    endShape();        }
    }
    pop();
}

function squiggle02(){ 
    push();
    noFill();
    stroke(255);
    strokeWeight(3);//thicker shape stroke
    beginShape();
    for (let x = 0; x < 5; x++){
        for(let y = 0; y < 5; y++){ 
    vertex(random(width), random(height));
    endShape();        }
    }
    pop();
}

function mousePressed(){
redraw();
}
