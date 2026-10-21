/**
 * Changing grid
 * Beth Templeton 
 * 
 * Change colour and size of squares in a grid with "c" and "s" keys.
 */

//grid variables
const grid = 50; //how spaced the shapes are
const inset = 0 + grid/2;//inset from outside of canvas

//variables for colour of squares
let colour = {
    r: 255, 
    g: 255,
    b: 255
}

let size = 10; //size of squares

/**
 * draw canvas and draw background once
*/
function setup() {
    createCanvas(500, 500);
    background(0);
}


/**
 * draw grid of 10 by 10 squares
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
    //change colour of squares to random colour once "c" key is pressed
    if(key === "c"){
    colour.r = random(255);
    colour.g = random(255);
    colour.b = random(255);
    }
    //increase the size of the squares if "s" key is pressed
    if(key === "s"){
        size++;
    }
}