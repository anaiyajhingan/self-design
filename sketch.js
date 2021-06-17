var backgroundImg;
var croc;
var gamestate=0;
var gamestate=1;
var gamestate=2;
var gamestate=3;

function preload() {
  backgroundImg = loadImage("download.jpg");
  dinos=loadImage("dino.jpg")
  whale=loadImage("whale.jpg")
  elep=loadImage("ele.jpg")
}

function setup() {
  createCanvas(1500,950);
  
  button=createButton("play");
  
 
}

function dino (){
  pic=createSprite(750,475);
  pic.scale=0.6
  pic.addImage(dinos)
  d1=createSprite(450,89,10,10);
  d2=createSprite(488,77,10,10);
  d3=createSprite(529,64,10,10);
  d4=createSprite(595,64,10,10);
  d5=createSprite(640,115,10,10);
  d6=createSprite(660,176,10,10);
  d7=createSprite(700,240,10,10);
  d8=createSprite(797,277,10,10);
  d9=createSprite(877,335,10,10);
  d10=createSprite(947,385,10,10);
  d11=createSprite(998,443,10,10);
  d12=createSprite(1050,530,10,10);
  d13=createSprite(1085,615,10,10);
  d14=createSprite(1098,710,10,10);
  d15=createSprite(705,850,10,10);
  d16=createSprite(810,908,10,10);
  d17=createSprite(885,900,10,10); 
  d18=createSprite(885,850,10,10);
  d19=createSprite(770,855,10,10);
  d20=createSprite(750,885,10,10);
  d21=createSprite(998,700,10,10);
  d22=createSprite(998,755,10,10);
  d23=createSprite(935,665,10,10);
  d24=createSprite(978,880,10,10);
  d25=createSprite(958,810,10,10);
  d26=createSprite(1070,820,10,10);
  }

 
function ele (){
  pic3=createSprite(7,475);
  pic3.scale=0.7
  pic3.addImage(elep)
  e1=createSprite(515,508,10,10);
  e2=createSprite(455,463,10,10);
  e3=createSprite(515,360,10,10);
  e4=createSprite(520,258,10,10);
  e5=createSprite(505,118,10,10);
  e6=createSprite(475,58,10,10);
  e7=createSprite(430,38,10,10);
  e8=createSprite(389,58,10,10);
  e9=createSprite(391,105,10,10);
  e10=createSprite(425,120,10,10);
  e11=createSprite(440,183,10,10);
  e12=createSprite(410,314,10,10);
  e13=createSprite(350,463,10,10);
  e14=createSprite(390,595,10,10);
  e15=createSprite(438,638,10,10);
  e16=createSprite(388,710,10,10);
  e17=createSprite(310,744,10,10); 
  e18=createSprite(260,730,10,10);
  e19=createSprite(330,775,10,10);
  e20=createSprite(430,719,10,10);
  e21=createSprite(480,660,10,10);
  e22=createSprite(538,668,10,10);
  e23=createSprite(585,695,10,10);
  e24=createSprite(610,672,10,10);
  e25=createSprite(585,785,10,10);
  e26=createSprite(578,758,10,10);
  e27=createSprite(510,806,10,10);
  e28=createSprite(700,596,10,10);
  e29=createSprite(648,700,10,10);
  e30=createSprite(743,718,10,10);
  e31=createSprite(828,658,10,10);
  e32=createSprite(897,400,10,10);
  e33=createSprite(805,768,10,10);
  e34=createSprite(889,769,10,10);
  e35=createSprite(1010,703,10,10);
  e36=createSprite(1090,660,10,10);
  e37=createSprite(1200,540,10,10);
  e38=createSprite(1215,370,10,10);
  e39=createSprite(1145,250,10,10);
  e40=createSprite(1038,233,10,10);
  e41=createSprite(938,257,10,10);
  e42=createSprite(890,305,10,10);
  e43=createSprite(880,350,10,10);
  e44=createSprite(805,285,10,10);
  e45=createSprite(660,270,10,10);
  e46=createSprite(565,330,10,10);
  e47=createSprite(515,405,10,10);
  e48=createSprite(510,445,10,10); 
  e49=createSprite(490,485,10,10);

}

function wh (){
  pic2=createSprite(750,475);
  pic2.scale=0.7
  pic2.addImage(whale)
  w1=createSprite(225,500,10,10);
  w2=createSprite(260,380,10,10);
  w3=createSprite(355,315,10,10);
  w4=createSprite(515,270,10,10);
  w5=createSprite(665,285,10,10);
  w6=createSprite(1015,230,10,10);
  w7=createSprite(750,335,10,10);
  w8=createSprite(845,450,10,10);
  w9=createSprite(915,525,10,10);
  w10=createSprite(1015,560,10,10);
  w11=createSprite(1030,153,10,10);
  w12=createSprite(1105,484,10,10);
  w13=createSprite(1110,383,10,10);
  w14=createSprite(1105,220,10,10);
  w15=createSprite(1145,300,10,10);
  w16=createSprite(1040,310,10,10);
  w17=createSprite(1245,330,10,10); 
  w18=createSprite(1150,430,10,10);
  w19=createSprite(1180,370,10,10);
  w20=createSprite(1150,558,10,10);
  w21=createSprite(1205,225,10,10);
  w22=createSprite(1310,200,10,10);
  w23=createSprite(1110,660,10,10);
  w24=createSprite(1020,735,10,10);
  w25=createSprite(920,780,10,10);
  w26=createSprite(855,820,10,10);
  w27=createSprite(775,830,10,10);
  w28=createSprite(700,810,10,10);
  w29=createSprite(550,810,10,10);
  w30=createSprite(420,789,10,10);
  w31=createSprite(330,741,10,10);
  w32=createSprite(260,658,10,10);
  w33=createSprite(215,630,10,10);
  }
 


 function draw() {
  background(backgroundImg); 
  
 
   if (gamestate=0){
    background(backgroundImg); 
    wh.hide();
    ele.hide();
    dino.hide();
    
    button.mousePressed(() => {
      button.hide();
     gamestate=1;
     wh.visibility=false;
     ele.visibility=false;
  })
    
   }
   if (gamestate=1){
    dino();
   


    
    

   }
 
}