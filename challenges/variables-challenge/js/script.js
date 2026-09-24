/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 255,
    b: 255
  }
};
//colour of background 
let sky = {
    r:0,
    g:0,
    b:255
}
//create bird
let bird = {
    x: 0,
    y: 50,
    size: 40,

    fill: {
    r: 255,
    g: 255,
    b: 255
}
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(sky.r, sky.g, sky.b);
  sky.b = sky.b-0.5; //change background colour from blue to black
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  //make mr furious more red
  mrFurious.fill.g = mrFurious.fill.g-0.5; 
  mrFurious.fill.b = mrFurious.fill.b-0.5;
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  //make mr furious shake
  mrFurious.x = mrFurious.x + random(-5, 5);
  mrFurious.x = constrain(mrFurious.x, 0, 400);
  mrFurious.y = mrFurious.y + random(-5, 5);
  mrFurious.y = constrain(mrFurious.y, 0, 400);
  pop();

  //draw bird
 push();
  noStroke();
  fill(bird.fill.r, bird.fill.g, bird.fill.b);
  rectMode(CENTER);
  square(bird.x, bird.y, bird.size); 
  bird.x = constrain(bird.x, 0, 400);//make bird move across and stop at right edge
 bird.x = bird.x+1; 
  
 pop();
}