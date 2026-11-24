/**
 * Beth Templeton
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
const grid = 20;
const cellSize = 20;
const cols = 25;
const rows = 25;

let squares = [];

//let fillColour = rgb(0, 0, 0)
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    for(let x = 0; x < cols; x++){
        for(let y = 0; y < rows; y++){
            squares.push({x: x*grid+cellSize/2, 
                y: y*grid+cellSize/2,
                width:cellSize,
                height: cellSize,
                colour: 255
        });
        }
    }
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
//     for(let x = 0; x < cols; x++){
//         for(let y = 0; y < rows; y++){
//     fill(squares.colour);
//     rect(squares.x, squares.y, squares.width, squares.height);
//     }
// }
rectMode(CENTER);
drawGrid();
//console.log(checkOverlap);
}

function drawGrid() {
    for(let s of squares){
        fill(s.colour);
        rect(s.x, s.y, s.width, s.height);
    }
}

// function mousePressed() {
//     let clickedColour = checkOverlap(squares.length, cellSize);
//     if(clickedColour == true){
//         fill(0);
//     }
//     else{
//         fill(255);
//     }
// }

// function checkOverlap(rectA, rectB) {
//   return (rectA.x + rectA.width/2 > rectB.x - rectB.width/2 &&
//           rectA.x - rectA.width/2 < rectB.x + rectB.width/2 &&
//           rectA.y + rectA.height/2 > rectB.y - rectB.height/2 &&
//           rectA.y - rectA.height/2 < rectB.y + rectB.height/2);
// }