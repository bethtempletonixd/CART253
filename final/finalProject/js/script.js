/**
 * Beth Templeton
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
const grid = 20;
const cellSize = 50;
const cols = 25;
const rows = 25;

let fillColour = {
    r: 255, 
    g: 0,
    b:0
}

let squares = [];

//let fillColour = rgb(0, 0, 0)
/**
 * Setup size of grid and each position, colour and size of the individual
 * squares in the squares array. 
*/
function setup() {
    createCanvas(500, 500);
    for(let x = 0; x < cols; x++){ //draw 25 columns of squares
        for(let y = 0; y < rows; y++){ //draw 25 rows of squares
            squares.push({x: x*grid+cellSize/2, 
                y: y*grid+cellSize/2,
                width:cellSize,
                height: cellSize,
                colour: {
                    r: 255,
                    g: 255,
                    b: 255
                }
        });
        }
    }
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
rectMode(CENTER);
drawGrid();
//console.log(checkOverlap);
}

function drawGrid() {
    for(let s of squares){
        fill(s.colour.r, s.colour.g, s.colour.b);
        rect(s.x, s.y, s.width, s.height);
    }
}

function mousePressed() {
    for(let s of squares){
        if(pointInRect(mouseX, mouseY, s)){
            s.colour = fillColour.r, fillColour.g, fillColour.b;
        }
    }
}

function pointInRect(px, py, r) {
  return (px > r.x -r.width/2 && px < r.x + r.width/2 && py > r.y-r.height/2 && py < r.y+r.height/2);
}