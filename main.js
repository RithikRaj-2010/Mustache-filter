nosex=0;
nosey=0;
function preload(){
mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
capture=createCapture(VIDEO);
capture.size(300,300);
capture.hide();
poseNet=ml5.poseNet(capture, modelloaded);
poseNet.on('pose',gotposes);
}
function modelloaded(){
   console.log("modelloaded");
}
function draw(){
image(capture,0,0,300,300);
//fill(250,0,0);
//stroke(250,0,0);
//circle(nosex,nosey,20);
image(mustache, nosex -15, nosey , 30, 30)
}
function take_snapshot(){
   save("clown_filter.png"); 
}
function gotposes(result){
if(result.length>0){
   console.log(result);
   console.log("nosex= "+result[0].pose.nose.x);
   console.log("nosey= "+result[0].pose.nose.y);
   nosex=result[0].pose.nose.x;
   nosey=result[0].pose.nose.y;
}
}