/**
 * Créé par David Champagne
 * 2020/05/17
 *
 */
var canvas = document.getElementById("mars");
var ctx = canvas.getContext("2d");
var gradient = ctx.createRadialGradient(85, 88, 5, 88, 90, 69);
gradient.addColorStop(0, 'black');
gradient.addColorStop(1, 'orange');
var radius = 80;
ctx.beginPath();
ctx.arc(150, 80, 60, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = gradient;
ctx.lineWidth = 3;
ctx.stroke();
ctx.font = "20px Blippo, fantasy";
ctx.color = "#FFFFFF";
ctx.fillText("MARS", 150,100);
ctx.textAlign = "center";

