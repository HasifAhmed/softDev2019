// gold_coin Yin on Chan and Tania Cao
// SoftDev2 pd8
// K01 -- ...and I want to Paint it Better
// 2019-01-31


//Did not use prevent default, but it prevents the user from doing a default action
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var prevX, prevY = -1;

function clearCanvas(){
  ctx.clearRect(0, 0, 600, 600);
  ctx.beginPath();
  prevX = -1;
}
function addDrawing(event){
  var x = event.offsetX;//the difference between the x coord of the mouse position to the left most side of the div the mouse was in.
  var y = event.offsetY;//the difference between the y coord of the mouse position to the top of the div the mouse was in.

  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.ellipse(x, y, 25, 25, 0, 0, 2 * Math.PI);
  ctx.fill(); // draws a dot
  ctx.fillStyle = 'black';
  ctx.stroke() // draws a circle

  ctx.beginPath();
  // console.log(prevX);
  if (prevX != -1){
    ctx.ellipse(x, y, 0, 0, 0, 0, 2 * Math.PI);
    ctx.lineTo(prevX, prevY);
    ctx.stroke();
  }
  else{
    ctx.moveTo(x,y);
  }
  prevX = x;
  prevY = y;
}
