/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(500, 500);
colorMode(HSB);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(220, 60, 100);
//drawing all the shapes
drawGround();
drawHouse();
drawSun();
drawClouds();
}

function drawGround(){
    push();
    noStroke();
    fill(150, 75, 100);
rect(0, 300, 500, 200);
pop();
}

function drawHouse(){
    //ROOF
    push();
    noStroke();
    fill(350, 100, 60);
    triangle(120, 220, 260, 100, 380, 220);
    pop();

    //HOUSE
    push();
    noStroke();
    fill(320, 50, 100);
    square(120, 220, 260);
    pop();

    //WINDOWS
    push();
    noFill();
    stroke(0, 0, 0);
    strokeWeight(3);
    square(160, 260, 50);
    square(290, 260, 50);
    rect(160, 380, 80, 50);
    pop();

    //DOOR
    push();
    noStroke();
    fill(50, 100, 100);
     rect(290, 380, 50, 100);
     pop();
     push();
     fill(0, 0, 0);
     circle(300, 430, 5);
     pop();
}

function drawSun(){
    push();
    fill(50, 100, 100);
    noStroke();
    circle(70, 80, 100);
    pop();
}

function drawClouds(){
push();
noStroke();
circle(340, 100, 50);
circle(360, 120, 50);
circle(360, 80, 50);
circle(380, 80, 50);
circle(400, 120, 50);
circle(420, 100, 50);

pop();
}