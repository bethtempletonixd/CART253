/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

let mover= {
    size: 50,
    x: 50,
    y: 400
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
    background(0);
    square(mover.x, mover.y, mover.size);
}

function keyPressed(event){
    let move = {
        x: 0, 
        y: 0
    }
    if(event.keyCode === RIGHT_ARROW){
        move.x = mover.size;
    }
}