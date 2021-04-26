function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0,0);
    noStroke();
     angleMode(DEGREES);
}

function draw() {
    background('white');
    var rows = 0;
    var firstColor = 'black';
    var secondColor = 'white';
    while (rows < 6) {
        if (rows % 2 == 0) {
            noStroke();
            firstColor = 'white'
            secondColor = 'black'
        } else {
            noStroke();
            firstColor = 'black'
            secondColor = 'white'
        }
        var columns = 0
        while (columns < 12) {
            noStroke();
            if (columns % 2 == 0) {
                noStroke();
                fill(firstColor)
            } else {
                noStroke();
                fill(secondColor)
            }
            rect(columns * 100 + 35, rows * 100 + 35, 100, 100)
            columns = columns + 1
        }
        rows = rows + 1

    }
//extra squares
//        fill(100)
//        noStroke();
//        rect(135,135,100,100);
    
//outline for entire checkerboard
      stroke('black');
        strokeWeight(2);
        noFill();
        rect(35, 35, 1200, 600);
    clockTwo();
//    clockOne();
clock();
}
function clockOne(){
       translate(85, 85);
   rotate(-90);

   let hr = hour();
   let mn = minute();
   let sc = second();

   strokeWeight(9);
   stroke('black');
   noFill();
   let secondAngle = map(sc, 0, 60, 0, 360);
   arc(0, 0, 40, 40, 0, secondAngle);

   stroke('black');
   let minuteAngle = map(mn, 0, 60, 0, 360);
   arc(0, 0, 60, 60, 0, minuteAngle);

   stroke('black');
   let hourAngle = map(hr % 12, 0, 12, 0, 360);
   arc(0, 0, 80, 80, 0, hourAngle);

   push();
   rotate(secondAngle);
   stroke(0);
   pop();

   push();
   rotate(minuteAngle);
   stroke(0);
   pop();

   push();
   rotate(hourAngle);
   pop();
}

function clockTwo(){
      noStroke();
    //clock two
let sec = map(second(), 0, 59, 0, 97);
  let mint = map(minute(), 0, 59, 0, 97);
  let hr = map(hour(), 0, 23, 0, 97);

  //draw sec/min/hour
    //WHITE SQUARES BLACK
    //---------------first row
fill('black');
  rect(37, 37, hr, 33);
  rect(37, 68, mint, 33);
  rect(37, 100, sec, 34);
    
 rect(37, 237, hr, 33);
  rect(37, 268, mint, 33);
  rect(37, 300, sec, 34);
    
    rect(37, 437, hr, 33);
  rect(37, 468, mint, 33);
  rect(37, 500, sec, 34);
    
//BLACK SWAUERES WHITE
    fill('white');
  rect(37, 137, hr, 33);
  rect(37, 168, mint, 33);
  rect(37, 200, sec, 34);
    
 rect(37, 337, hr, 33);
  rect(37, 368, mint, 33);
  rect(37, 400, sec, 34);
    
    rect(37, 537, hr, 33);
  rect(37, 568, mint, 33);
  rect(37, 600, sec, 34);
    
        //---------------second row
fill('white');
  rect(137, 37, hr, 33);
  rect(137, 68, mint, 33);
  rect(137, 100, sec, 34);
    
 rect(137, 237, hr, 33);
  rect(137, 268, mint, 33);
  rect(137, 300, sec, 34);
    
    rect(137, 437, hr, 33);
  rect(137, 468, mint, 33);
  rect(137, 500, sec, 34);
    
//BLACK SWAUERES WHITE
    fill('black');
  rect(137, 137, hr, 33);
  rect(137, 168, mint, 33);
  rect(137, 200, sec, 34);
    
 rect(137, 337, hr, 33);
  rect(137, 368, mint, 33);
  rect(137, 400, sec, 34);
    
    rect(137, 537, hr, 33);
  rect(137, 568, mint, 33);
  rect(137, 600, sec, 34);
    
     //---------------third row
fill('black');
  rect(237, 37, hr, 33);
  rect(237, 68, mint, 33);
  rect(237, 100, sec, 34);
    
 rect(237, 237, hr, 33);
  rect(237, 268, mint, 33);
  rect(237, 300, sec, 34);
    
    rect(237, 437, hr, 33);
  rect(237, 468, mint, 33);
  rect(237, 500, sec, 34);
    
//BLACK SWAUERES WHITE
    fill('white');
  rect(237, 137, hr, 33);
  rect(237, 168, mint, 33);
  rect(237, 200, sec, 34);
    
 rect(237, 337, hr, 33);
  rect(237, 368, mint, 33);
  rect(237, 400, sec, 34);
    
    rect(237, 537, hr, 33);
  rect(237, 568, mint, 33);
  rect(237, 600, sec, 34); 

      //---------------fourth row
fill('white');
  rect(337, 37, hr, 33);
  rect(337, 68, mint, 33);
  rect(337, 100, sec, 34);
    
 rect(337, 237, hr, 33);
  rect(337, 268, mint, 33);
  rect(337, 300, sec, 34);
    
    rect(337, 437, hr, 33);
  rect(337, 468, mint, 33);
  rect(337, 500, sec, 34);
    
//BLACK SWAUERES WHITE
    fill('black');
  rect(337, 137, hr, 33);
  rect(337, 168, mint, 33);
  rect(337, 200, sec, 34);
    
 rect(337, 337, hr, 33);
  rect(337, 368, mint, 33);
  rect(337, 400, sec, 34);
    
    rect(337, 537, hr, 33);
  rect(337, 568, mint, 33);
  rect(337, 600, sec, 34);
    
      //---------------fifth row
fill('black');
  rect(437, 37, hr, 33);
  rect(437, 68, mint, 33);
  rect(437, 100, sec, 34);
    
 rect(437, 237, hr, 33);
  rect(437, 268, mint, 33);
  rect(437, 300, sec, 34);
    
    rect(437, 437, hr, 33);
  rect(437, 468, mint, 33);
  rect(437, 500, sec, 34);
    
//BLACK SWAUERES WHITE
    fill('white');
  rect(437, 137, hr, 33);
  rect(437, 168, mint, 33);
  rect(437, 200, sec, 34);
    
 rect(437, 337, hr, 33);
  rect(437, 368, mint, 33);
  rect(437, 400, sec, 34);
    
    rect(437, 537, hr, 33);
  rect(437, 568, mint, 33);
  rect(437, 600, sec, 34); 

      //---------------sixth row
fill('white');
  rect(537, 37, hr, 33);
  rect(537, 68, mint, 33);
  rect(537, 100, sec, 34);
    
 rect(537, 237, hr, 33);
  rect(537, 268, mint, 33);
  rect(537, 300, sec, 34);
    
    rect(537, 437, hr, 33);
  rect(537, 468, mint, 33);
  rect(537, 500, sec, 34);
    
//BLACK SWAUERES WHITE
    fill('black');
  rect(537, 137, hr, 33);
  rect(537, 168, mint, 33);
  rect(537, 200, sec, 34);
    
 rect(537, 337, hr, 33);
  rect(537, 368, mint, 33);
  rect(537, 400, sec, 34);
    
    rect(537, 537, hr, 33);
  rect(537, 568, mint, 33);
  rect(537, 600, sec, 34);
    
      //---------------seventh row
fill('black');
  rect(637, 37, hr, 33);
  rect(637, 68, mint, 33);
  rect(637, 100, sec, 34);
    
 rect(637, 237, hr, 33);
  rect(637, 268, mint, 33);
  rect(637, 300, sec, 34);
    
    rect(637, 437, hr, 33);
  rect(637, 468, mint, 33);
  rect(637, 500, sec, 34);
    
//BLACK SWAUERES WHITE
    fill('white');
  rect(637, 137, hr, 33);
  rect(637, 168, mint, 33);
  rect(637, 200, sec, 34);
    
 rect(637, 337, hr, 33);
  rect(637, 368, mint, 33);
  rect(637, 400, sec, 34);
    
    rect(637, 537, hr, 33);
  rect(637, 568, mint, 33);
  rect(637, 600, sec, 34); 

      //---------------eigth row
fill('white');
  rect(737, 37, hr, 33);
  rect(737, 68, mint, 33);
  rect(737, 100, sec, 34);
    
 rect(737, 237, hr, 33);
  rect(737, 268, mint, 33);
  rect(737, 300, sec, 34);
    
    rect(737, 437, hr, 33);
  rect(737, 468, mint, 33);
  rect(737, 500, sec, 34);
    
//BLACK SWAUERES WHITE
    fill('black');
  rect(737, 137, hr, 33);
  rect(737, 168, mint, 33);
  rect(737, 200, sec, 34);
    
 rect(737, 337, hr, 33);
  rect(737, 368, mint, 33);
  rect(737, 400, sec, 34);
    
    rect(737, 537, hr, 33);
  rect(737, 568, mint, 33);
  rect(737, 600, sec, 34);
    
     //---------------ninth row
fill('black');
  rect(837, 37, hr, 33);
  rect(837, 68, mint, 33);
  rect(837, 100, sec, 34);
    
 rect(837, 237, hr, 33);
  rect(837, 268, mint, 33);
  rect(837, 300, sec, 34);
    
    rect(837, 437, hr, 33);
  rect(837, 468, mint, 33);
  rect(837, 500, sec, 34);
    
//BLACK SWAUERES WHITE
    fill('white');
  rect(837, 137, hr, 33);
  rect(837, 168, mint, 33);
  rect(837, 200, sec, 34);
    
// rect(837, 337, hr, 33);
//  rect(837, 368, mint, 33);
//  rect(837, 400, sec, 34);
    
    rect(837, 537, hr, 33);
  rect(837, 568, mint, 33);
  rect(837, 600, sec, 34); 

      //---------------tenth row
fill('white');
  rect(937, 37, hr, 33);
  rect(937, 68, mint, 33);
  rect(937, 100, sec, 34);
    
 rect(937, 237, hr, 33);
  rect(937, 268, mint, 33);
  rect(937, 300, sec, 34);
    
    rect(937, 437, hr, 33);
  rect(937, 468, mint, 33);
  rect(937, 500, sec, 34);
    
//BLACK SWAUERES WHITE
    fill('black');
  rect(937, 137, hr, 33);
  rect(937, 168, mint, 33);
  rect(937, 200, sec, 34);
    
 rect(937, 337, hr, 33);
  rect(937, 368, mint, 33);
  rect(937, 400, sec, 34);
    
    rect(937, 537, hr, 33);
  rect(937, 568, mint, 33);
  rect(937, 600, sec, 34);
    
     //---------------eleventh row
fill('black');
  rect(1037, 37, hr, 33);
  rect(1037, 68, mint, 33);
  rect(1037, 100, sec, 34);
    
 rect(1037, 237, hr, 33);
  rect(1037, 268, mint, 33);
  rect(1037, 300, sec, 34);
    
    rect(1037, 437, hr, 33);
  rect(1037, 468, mint, 33);
  rect(1037, 500, sec, 34);
    
//BLACK SWAUERES WHITE
    fill('white');
  rect(1037, 137, hr, 33);
  rect(1037, 168, mint, 33);
  rect(1037, 200, sec, 34);
    
 rect(1037, 337, hr, 33);
  rect(1037, 368, mint, 33);
  rect(1037, 400, sec, 34);
    
    rect(1037, 537, hr, 33);
  rect(1037, 568, mint, 33);
  rect(1037, 600, sec, 34); 

      //---------------twelvth row
fill('white');
  rect(1137, 37, hr, 33);
  rect(1137, 68, mint, 33);
  rect(1137, 100, sec, 34);
    
 rect(1137, 237, hr, 33);
  rect(1137, 268, mint, 33);
  rect(1137, 300, sec, 34);
    
    rect(1137, 437, hr, 33);
  rect(1137, 468, mint, 33);
  rect(1137, 500, sec, 34);
    
//BLACK SWAUERES WHITE
    fill('black');
  rect(1137, 137, hr, 33);
  rect(1137, 168, mint, 33);
  rect(1137, 200, sec, 34);
    
 rect(1137, 337, hr, 33);
  rect(1137, 368, mint, 33);
  rect(1137, 400, sec, 34);
    
    rect(1137, 537, hr, 33);
  rect(1137, 568, mint, 33);
  rect(1137, 600, sec, 34);
    
}

function clock()
{
 fill("white");
//  textFont(myFont);
  textAlign(CENTER, CENTER);
  textSize(18);
  let Hour = hour();
  let min = minute();
  let secs = second()
  let noon = Hour >= 24? " PM" : " "
  if(min < 10)
    min = "0"+min
  Hour%=24
  // text(Hour+":"+min+":"+secs+noon, width/2, height/2); 
textAlign(CENTER);
  text(Hour+":"+min+":"+secs,885,385);
//  text(min,850,390);
//  text(secs,850,420);
}