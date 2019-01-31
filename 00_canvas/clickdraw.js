var shape = "rect";
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
function clearCanvas(){
  ctx.clearRect(0, 0, 600, 600);
}
function addDrawing(event){
  var edge = c.getBoundingClientRect();
  var x = event.clientX - edge.left;
  var y = event.clientY - edge.top;
  if (shape == "rect"){
    ctx.fillRect(x, y, 50, 100);
  }
  else{
    ctx.beginPath();
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
