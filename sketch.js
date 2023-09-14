function setup() {
    createCanvas(800, 800);
    background(255);
}

function draw() {
    //drawing area
    fill(247,247,245);
    noStroke();
    rect(0, 0, 608, 790);

    // the graphics
fill(23, 28, 31);
rect(170, 477, 275, 275);

fill(239, 187, 42);
rect(465, 252, 112, 183);

fill(131,75,57);
rect(430, 188, 72, 64);

fill(141, 89, 68);
ellipse(400, 300, 87, 87);
fill(243,244,246);
ellipse(400,300,60,60);

fill(53, 94, 182);
quad(86, 146, 172, 331, 357, 203, 206, 50);

fill(38, 51, 51);
quad(141, 47, 20, 147, 47, 180, 168, 80);

}
