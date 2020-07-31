var state = 0;

var Username;
var Password;
var fp;
var Rm;
var CA;

var Google, GIMG;
var Facebook, FIMG;
var Gmail, GMIMG;

var Emergency;
var Police;
var Ambulance;
var Fire;
var Tow;
var Covid;

var Login;

function setup() {
  createCanvas(800,1200);
}

function draw() {
// background("black");  
console.log(state);
  //////////////////////////////////////////////////////////////////////////////////////////
  if(state === 0 ){
    FP();
  }
  //////////////////////////////////////////////////////////////////////////////////////////
  
  //***********************************************************************\\
  
  ///////////////////////////////////////////////////
  Emergency.mousePressed(function(){
    state = 1;
  })
  
  if(state === 1)
  {
    FpHide();
    ES() //Emergency services page
  
  }
  ///////////////////////////////////////////////////
  
  //***********************************************************************\\
  
  //////////////////////////////////////////////////////////////////////
  Login.mousePressed(function(){
    state = 2;
    background("red");
  })

  if(state === 2)
  {
    //PC();   // PC = Password Check . in this function, the data will be checked (password and username)
    //If everyting is correct then we will return 'TRUE' or else 'FALSE;
  }

  //////////////////////////////////////////////////////////////////////
   
  //***********************************************************************\\
  








































































































































































































































  drawSprites();
}