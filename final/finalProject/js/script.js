/**
 * Beth Templeton
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
const grid = 20;
//const inset = 0 + grid/2;

let squares = [];

let cellSize = 20;

//let fillColour = rgb(0, 0, 0)
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    for(let x = 0; x < 50; x++){
        for(let y = 0; y < 50; y++){
            squares.push(grid);
        }
    }
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    for(let x = 0; x < 50; x++){
        for(let y = 0; y < 50; y++){
    //fill(255);
    rectMode(CENTER);
    rect(x * grid, y * grid, cellSize, cellSize);
    }
}
console.log(d);
}

function mousePressed() {
    let d = dist(mouseX, mouseY, cellSize, cellSize);
    if(d < cellSize){
        fill(0);
    }
    else{
        fill(255);
    }
}