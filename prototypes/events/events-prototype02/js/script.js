/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

const grid = 50; //how spaced the shapes are
const inset = 0 + grid/2;//inset from outside of canvas
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
    rectMode(CENTER);
    for (let y = 0; y < 10; y++){//draw y axis of 10 squares
    for(let x = 0; x < 10; x++){//draw x axis of 10 squares
    rect(inset + x * grid, inset + y * grid, 10, 10);
        }
    }
}

function keyPressed() {
    fill(random(255), random(255), random(255));
}