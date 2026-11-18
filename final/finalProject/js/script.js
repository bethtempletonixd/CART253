/**
 * Beth Templeton
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
let slider;
const grid = 10;
const inset = 0 + grid/2;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    slider = createSlider(20, 200, 20);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    let rectSize = slider.value();
    for(let x = 0; x < 10; x++){
        for(let y = 0; y < 10; y++){
    rectMode(CENTER);
    rect(inset + x * grid, inset + y * grid, rectSize, rectSize);
    }
}
}