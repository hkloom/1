// Just some shorthand
function sin(x){  return Math.sin(x); }
function cos(x){  return Math.cos(x); }
function tan(x){  return Math.tan(x); }
function exp(x){  return Math.exp(x); }
function sqrt(x){ return Math.sqrt(x); }
function sinh(x){ return (exp(x)-exp(-x))/2; }
function cosh(x){ return (exp(x)+exp(-x))/2; }

function draw(){
	  console.log("drawing");
      var dx = new Function('x','y', 'return '+document.getElementById("dx").value+';');
      var dy = new Function('x','y', 'return '+document.getElementById("dy").value+';');
      var c=document.getElementById("canvas");
      var ctx=c.getContext("2d");
      ctx.fillStyle="#FFFFFF";
      ctx.globalAlpha=0.05;
      ctx.fillRect(0,0,c.width,c.height,1);
      ctx.globalAlpha=1.0;
      ctx.fillStyle="#000000";
      for (var k =1; k<=5; k++){
        //ctx.fillStyle=document.getElementById("color"+k+id).value;
        for (var j = 0; j < 200; j++){
          var x = Math.random()*5;
          var y = Math.random()*5;
          for (var d = 0; d < 50; d++){
            x += 0.015*dx(x,y);
            y += 0.015*dy(x,y);
            ctx.fillRect(x*100,y*100,0.8,0.8);
          }
        }
      }
  }