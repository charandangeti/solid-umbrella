hp="";
peter="";
function preload(){
hp=loadSound("hp.mp3");
peter=loadSound("peter.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);

}
function Play(){
    hp.play();
}