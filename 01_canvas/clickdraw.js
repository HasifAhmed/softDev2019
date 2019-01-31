// gold_coin Yin on Chan and Tania Cao
// SoftDev2 pd8
// K01 -- ...and I want to Paint it Better
// 2019-01-31


//Did not use prevent default, but it prevents the user from doing a default action
var shape = "rect";
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
function clearCanvas(){
  ctx.clearRect(0, 0, 600, 600);
}
function addDrawing(event){
  // var edge = c.getBoundingClientRect();
  var x = event.offsetX;
  var y = event.offsetY;
  if (shape == "rect"){
    ctx.fillRect(x, y, 50, 100);
  }
  else{
    ctx.beginPath(); //Dis
    ctx.ellipse(x, y, 25, 25, 0, 0, 7);
    ctx.stroke();
    ctx.fill();
  }
}
function changeShape(){
  if (shape == "rect"){
    shape = "circ";
  }
  else{
    shape = "rect"
  }
}
