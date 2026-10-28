let dialogueOptions = ["yes", "no", "maybe", "perchance", "definitely", "on occasion", "mayhaps", "sometimes"]
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
  console.log(dialogueOptions);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    displayText(displayOptions[dialogueOptionsIndex]);
}

function displayText(referenceString) {
    push();
    fill(255);
    textSize(32);
    text(referenceString);
    pop();
}