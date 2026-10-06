/**
 * Angry creature
 * Beth Templeton 
 * 
 * Creature that changes colour depending how angry it is. If mouse is inside the circle the colour changes to orange to make him angry, 
 * if the mouse is pressed once inside the circle the colour will change to red to make him full of rage. 
 */

//variables to control colour, size, position of creature 
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
    eyeFillStates: {
        neutral: "#000000",
        angry: "#880404"
    },
    creatureFillStates:{
        angry: "#ff8800",
        rage: "#f20b0b",
        neutral: "#edd70e",
    },
    currentFill: "#edd70e"
}

/**
 * draw canvas of size 500 by 500 pixels
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * draw creature and change the colour depending on mouse position and if it is pressed
*/
function draw() {
    angryCreature();
    drawCreature();
}

//draw creature
function drawCreature() {
    //draw yellow circle
    noStroke();
    fill(creature.currentFill);
    circle(creature.x, creature.y, creature.size);

    //draw eyes
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

//change colour of creature depending on mouse position and if it is pressed
function angryCreature() {
    let distance = dist(creature.x, creature.y, mouseX, mouseY);

    if(distance < creature.size/2){
        creature.currentFill = creature.creatureFillStates.angry;
    }
    else{
        creature.currentFill = creature.creatureFillStates.neutral;
    }

    if(distance < creature.size/2 && mouseIsPressed){
        creature.currentFill = creature.creatureFillStates.rage;
        creature.eye.eyeCentre.currentFill = creature.eyeFillStates.angry;
    }
    else{
        creature.currentFill = creature.creatureFillStates.neutral;
        creature.eye.eyeCentre.currentFill = creature.eyeFillStates.neutral;
    }
}