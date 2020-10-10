function setup(){
  createCanvas(400,400);
}

function draw(){
  background(0);
  text("second = cyan",50,25);
  text("minutes = purple",50,50);
  text("hour = blue",50,75);
translate(200,200);
rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second();


  
strokeWeight(4);
noFill();
stroke(100,225,255);
let end1 = map(sc,0,60,0,360);
arc(0,0,260,260,0,end1);

stroke(150,100,150);
let end2 = map(mn,0,60,0,360);
arc(0,0,280,280,0,end2);

stroke(10,100,255);
let end3 = map(hr % 12,0,12,0,360);
arc(0,0,300,300,0,end3);


push();
rotate(end1);
stroke(100,225,255);
line(0,0,100,0);
pop();

push();
rotate(end2);
stroke(150,100,150);
line(0,0,75,0);
pop();

push();
rotate(end3);
stroke(10,100,255);
line(0,0,50,0);
pop();


}