/**
 * Colour grid
 * Beth Templeton 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

const grid = 50; //how spaced the shapes are
const inset = 0 + grid/2;//inset from outside of canvas

let colour = {
    r: 255, 
    g: 255,
    b: 255
}

let size = 10;

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
    fill(colour.r, colour.g, colour.b);
    rectMode(CENTER);
    for (let y = 0; y < 10; y++){//draw y axis of 10 squares
    for(let x = 0; x < 10; x++){//draw x axis of 10 squares
    square(inset + x * grid, inset + y * grid, size);
        }
    }
}

function keyPressed() {
    // console.log(keyPressed);
    if(key === "c"){
    colour.r = random(255);
    colour.g = random(255);
    colour.b = random(255);
    }

    if(key === "s"){
        size++;
    }
}