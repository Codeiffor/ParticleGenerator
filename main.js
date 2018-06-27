canvas=document.querySelector('#particles');
var w=canvas.attributes.width.value=document.body.clientWidth;
var h=canvas.attributes.height.value=document.documentElement.clientHeight;

ctx=canvas.getContext('2d');
var gradient=ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);
gradient.addColorStop(0,'rgba(0, 20, 53,0.5)');
gradient.addColorStop(1,'rgba(0, 15, 40,0.1)');
//particles' configuration

particles=[];
var count=Math.floor(Math.sqrt(w*h)/20);
for(var i=0;i<count;i++){
  var speed=Math.random()*count/25+1;
  var angle=Math.random()*2*Math.PI;  
  particles.push({
    x:Math.random()*w,
    y:Math.random()*h,
    xspeed:speed*Math.cos(angle),
    yspeed:speed*Math.sin(angle)
  });
}
document.addEventListener('click',function(event){  
  for(var i=0;i<10;i++){
    var speed=Math.random()*count/25+1;
    var angle=Math.random()*2*Math.PI;  
    particles.push({
      x:event.pageX+Math.random()*10-5,
      y:event.pageY+Math.random()*10-5,
      xspeed:speed*Math.cos(angle),
      yspeed:speed*Math.sin(angle)
    });
  }
});

function particleRecovery(i){
  if(particles[i].x<0){
    particles[i].x=w;
  }
  if(particles[i].x>w){
    particles[i].x=0;
  }
  if(particles[i].y<0){
    particles[i].y=h;
  }
  if(particles[i].y>h){
    particles[i].y=0;
  }
}

//particle animation

particleAnimation();
function particleAnimation(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle='black';
  ctx.fillRect(0,0,w,h);
  ctx.fillStyle=gradient;
  ctx.fillRect(0,0,w,h);
  var l=particles.length;
  for(var i=0;i<l;i++){
    drawParticle(particles[i]);
    particles[i].x-=-particles[i].xspeed;
    particles[i].y-=-particles[i].yspeed;
    if(particles[i].x<0|| particles[i].x>w|| particles[i].y<0|| particles[i].y>h){
      if(i<count){
        particleRecovery(i);
      }
      else{
        particles.splice(i,1);
        l--;
      }
    }
  }
  requestAnimationFrame(particleAnimation);
}

//draw particles

function drawParticle(p){
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle='rgba(255,255,255,0.15)';
  ctx.arc(p.x,p.y,6,0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle='rgba(255,255,255,1)';
  ctx.arc(p.x,p.y,1.5,0,2*Math.PI);
  ctx.fill();
  ctx.restore();
}