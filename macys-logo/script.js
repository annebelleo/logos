function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("white")
    rotate(20 * Math.PI / 180);
    star(100, 100, 50, 20, 5)
}

function star(x, y, radius1, radius2, npoints) {
    fill("red");
    noStroke();
    // angle = 6.28... / 5
    var angle = TWO_PI / npoints;
    // halfAngle = (6.28../5) / 2
    var halfAngle = angle/2.0;
    // begin drawing the shape
    beginShape();
    // when a is 0, 0 < 6.28..., angle repeatedly added (~0.5)
    for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}