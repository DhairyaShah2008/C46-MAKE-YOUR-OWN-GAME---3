var BG, BGI1, BGI2, BGI3
var titleSlide,titleSlideI
var gameState=1
var login

var next
function preload()
{
	BG=loadImage("Background.png")
titleSlideI=loadImage("TitleSlide.gif")

BGI1=loadImage("TitleSlide.gif")
BGI2=loadImage("Background - Copy.png")
BGI3=loadImage("Background.png")

}
function setup() {
createCanvas(windowWidth, windowHeight); 
next= new button("Next",width/1.1,height/1.25)
BG=createSprite(width/2,height/2,width,width)
login=new Login()

}
function draw() {
  background("white");
   
    console.log(gameState)

  
  
  if(gameState===0){

//image(titleSlideI,width-width,height-height,width,height)
BG.addImage(BGI1)
}
 
if(gameState===1){
BG.addImage(BGI2)

}
 drawSprites();
}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight)

}