var a = 0;

function setup() {
    createCanvas(300, 300, WEBGL);
}

function draw() {
    background(51);
    // translate(width / 2, height / 2);
    rotateX(a);
    // noFill(0);
    // stroke(255);
    box();

    a+= 0.01;
}