canvas = document.querySelector('#particles');
var w = canvas.attributes.width.value = document.body.clientWidth;
var h = canvas.attributes.height.value = document.documentElement.clientHeight;
ctx = canvas.getContext('2d');
var gradient = ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);
gradient.addColorStop(0,'rgba(0, 20, 53,0.5)');
gradient.addColorStop(1,'rgba(0, 15, 40,0.1)');
ctx.fillStyle = 'black';
ctx.fillRect(0,0,w,h);
ctx.fillStyle = gradient;
ctx.fillRect(0,0,w,h);

