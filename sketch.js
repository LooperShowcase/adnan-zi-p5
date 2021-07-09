function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let seconds = second();
  let hours = hour();
  let minutes = minute();
  // The same as doing: background(220); or --> background(220,220,220);
  background(255);

  translate(width / 2, height / 2);

  rotate(-90);
  noFill();
  strokeWeight(1);
  stroke("black");
  let secondsArc = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondsArc);
  strokeWeight(8);
  ellipse(0, 0, 350);
  //m
  noFill();
  strokeWeight(1);
  stroke("black");
  let minutesArc = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 270, 270, 0, minutesArc);

  noFill();
  strokeWeight(1);
  stroke("black");
  let hoursArc = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 240, 240, 0, hoursArc);

  strokeWeight(1);
  //seconds
  push();
  stroke(250, 0, 0);
  rotate(secondsArc);

  line(0, 0, 150, 0);
  text(seconds, 160, 0);
  pop();

  //minutes
  push();
  stroke(000);
  rotate(minutesArc);
  line(0, 0, 130, 0);
  text(minutes, 140, 0);
  pop();

  //hours
  push();
  stroke(000);
  rotate(hoursArc);
  line(0, 0, 114, 0);
  text(hours, 124, 0);
  pop();
}
