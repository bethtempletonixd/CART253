/**
 * Bouncing balls
 * Beth Templeton
 * 
 * Using code from the class challenge. 
 * Two different sized balls bounce about the screen and when you click the mouse another ball appears 
 * with the same properties.
 */


/**
 * Variables for ball
*/
let ball1 = undefined; 
let ball2 = undefined;
let balls1 = [];//array to hold ball01 objects
let balls2 = []; //array for ball2 objects
/**
 * Create the canvas and the ball
 */
function setup() {
  createCanvas(500, 500);
  ball1 = createBall01();
  ball2 = createBall02();
}

/**
 * Creates a random ball
 */
function createBall01() {
  // Create a ball object with appropriate properties
  const newBall01 = {
    // Position and dimensions
    x1: 200,
    y1: 200,
    size1: 20,
    // Colour
    fill1: "#000000",
    // Movement
    velocity1: {
      x: random(-5, 5),
      y: random(-5, 5)
    },
  };
  return newBall01;
}

function createBall02() {
  // Create a ball object with appropriate properties
  const newBall02 = {
    // Position and dimensions
    x2: 100,
    y2: 100,
    size2: 50,
    // Colour
    fill2: "#7316e5",
    // Movement
    velocity2: {
      x: random(-2, 2),
      y: random(-2, 2)
    },
  };
  return newBall02;
}

/**
 * Moves and draws the ball
 */
function draw() {
  background("#d245a5");
  
  moveBall01(ball1);
  bounceBall01(ball1);
  drawBall01(ball1);

   moveBall02(ball2);
   bounceBall02(ball2);
   drawBall02(ball2);

  for(ball1 of balls1){
    drawBall01(ball1);
    moveBall01(ball1);
    bounceBall01(ball1);
  }
    for(ball2 of balls2){
    drawBall02(ball2);
    moveBall02(ball2);
    bounceBall02(ball2);
    }

  
}

function mousePressed(){
    let newBall01 = createBall01();
    balls1.push(newBall01);
    let newBall02 = createBall02();
    balls2.push(newBall02);
}

/**
 * Moves the ball according to its velocity
 */
function moveBall01(ball) {
  ball.x1 += ball.velocity1.x;
  ball.y1 += ball.velocity1.y;
}

function moveBall02(ball) {
  ball.x2 += ball.velocity2.x;
  ball.y2 += ball.velocity2.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall01(ball) {
  // Check if the ball has reached the left or right
  const bounceX = (ball.x1 > width || ball.x1 < 0);
  // Check if the ball has reached the top or bottom
  const bounceY = (ball.y1 > height || ball.y1 < 0);
  
  // Handle bouncing horizontally
  if (bounceX) {
    ball.velocity1.x *= -1;
  }
  // Handle bouncing vertically
  if (bounceY) {
    ball.velocity1.y *= -1;
  }
}

function bounceBall02(ball) {
  // Check if the ball has reached the left or right
  const bounceX = (ball.x2 > width || ball.x2 < 0);
  // Check if the ball has reached the top or bottom
  const bounceY = (ball.y2 > height || ball.y2 < 0);
  
  // Handle bouncing horizontally
  if (bounceX) {
    ball.velocity2.x *= -1;
  }
  // Handle bouncing vertically
  if (bounceY) {
    ball.velocity2.y *= -1;
  }
}

/**
 * Draw the ball on the canvas
 */
function drawBall01(ball) {
  push();
  noStroke();
  fill(ball.fill1);
  ellipse(ball.x1, ball.y1, ball.size1);
  pop();
}

function drawBall02(ball) {
  push();
  noStroke();
  fill(ball.fill2);
  ellipse(ball.x2, ball.y2, ball.size2);
  pop();
}