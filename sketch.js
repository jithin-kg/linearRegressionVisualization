let data = [];
let width = 400;
let height = 400;
let m =1;
let b = 0;

function setup() {
  
  createCanvas(height, width);
  
}

function linearRegression(){
  let xSum = 0;
  let ysum = 0;

  for(let i =0; i < data.length; i ++){
    xSum += data[i].x;
    ysum += data[i].y;
  }

  let xMean = xSum / data.length;
  let yMean = ysum / data.length;

  let numerator = 0;
  let denomenator = 0;
  for(let i =0; i < data.length; i++){
    
    let x = data[i].x;
    let y = data[i].y;

    numerator += (x - xMean) * (y - yMean);
    denomenator += (x - xMean) * (x - xMean);

  }

  m = numerator / denomenator;

  b = yMean - m * xMean;
}

function drawLine(){
  // console.log("draw line")


  var x1 = 0;
  var y1 = m * x1 + b;

  var x2 = 1;
  var y2 = m * x2  + b;

  x1 = map(x1, 0, 1, 0, width );
  y1 = map(y1, 0, 1, height, 0 );

  x2 = map(x2, 0, 1, 0, width );
  y2 = map(y2, 0, 1, height, 0 ); 

  stroke(0, 215, 0);

  line(x1, y1, x2, y2);
}
function mousePressed(){
  var x = map(mouseX, 0, height, 0, 1);
  var y = map(mouseY, 0, width, 1, 0);

  var point = createVector(x, y);

  data.push(point);
}
function draw() {
  background(43);

// drawing x and y cordinates
  stroke(255, 255, 0);
  line(0, height - 20, 400, height - 20);
  line(10, 0, 10, height )

  for(let i =0; i < data.length; i++){
    var x = map(data[i].x, 0, 1, 0, width );
    var y = map(data[i].y, 0, 1, height, 0);

    fill(255);
    stroke(255);  
    ellipse(x, y, 8, 8);
    
  }
  
  if(data.length > 1){
    linearRegression();
    drawLine();
  }
  
}
