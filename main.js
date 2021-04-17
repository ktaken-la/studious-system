NoseX=0;
NoseY=0;
difference=0;
LeftWristX=0;
RightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
   background('#969A97');

   document.getElementById('square_sides').innerHTML="Width and height of square will be"+difference+"px";
   fill('#4B0082');
   stroke('#4B0082');
   square(NoseX,NoseY,difference);
}

function modelLoaded(){
console.log('Posenet has initialized. javascript applet status: on');
}

 function gotPoses(results){
  if(results.length>0){
   console.log(results);
   NoseX=results[0].pose.nose.x;
   NoseY=results[0].pose.nose.y;
   console.log("NoseX="+NoseX+"and NoseY="+NoseY);

   LeftWristX=results[0].pose.leftWrist.x;
   RightWristX=results[0].pose.rightWrist.x;
   difference=floor(LeftWristX-RightWristX);
   console.log("left wrist="+LeftWristX+"and right wrist="+RightWristX);
   console.log("difference="+difference);
  }
 }