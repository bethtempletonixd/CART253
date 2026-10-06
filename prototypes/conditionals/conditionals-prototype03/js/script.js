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
        centre_y: 250
    },
    fillStates:{
        happy: "#f802aa",
        sad: "#343ae7",
        angry: "#f20b0b",
        neutral: "#edd70e",
    },
    currentFill: "#edd70e"
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawCreature();
}

function drawCreature() {
    //draw yellow circle
    noStroke();
    fill(creature.currentFill);
    circle(creature.x, creature.y, creature.size);
    //draw eyes
    fill(creature. eye.fill);
    circle(creature.eye.centre_x - creature.eye.size, creature.eye.centre_y, creature.eye.size);
    circle(creature.eye.centre_x + creature.eye.size, creature.eye.centre_y, creature.eye.size);
}