/**
 * Title of Project
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
let creature = {
    x: 250,
    y: 250, 
    size: 200,
    eye:{
        fill: "#ffffff",
        size: 200/3.5,
        centre_x: 250,
        centre_y: 250,
    eyeCentre: {
        centre_x: 250,
        centre_y: 250,
        size: 200/5,
        currentFill: "#000000"
    }
    },
    currentFill: "#edd70e"
}

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
  drawCreature();
}

function mouseMoved() {
    fill(255);
    textAlign(CENTER);
    textSize(40);
    text("BOO!", mouseX, mouseY);
}

function drawCreature() {
        fill(creature.currentFill);
    circle(creature.x, creature.y, creature.size);

    fill(creature. eye.fill);
    circle(creature.eye.centre_x - creature.eye.size, creature.eye.centre_y, creature.eye.size);
    circle(creature.eye.centre_x + creature.eye.size, creature.eye.centre_y, creature.eye.size);
    //centre of eyes
    fill(creature.eye.eyeCentre.currentFill);
    circle(creature.eye.eyeCentre.centre_x - creature.eye.size, creature.eye.eyeCentre.centre_y, creature.eye.eyeCentre.size);
    circle(creature.eye.eyeCentre.centre_x + creature.eye.size, creature.eye.eyeCentre.centre_y, creature.eye.eyeCentre.size);

     //draw mouth
    stroke(0);
    strokeWeight(2);
    line(220, 300, 280, 300);
}