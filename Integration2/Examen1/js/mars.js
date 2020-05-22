/**
 * Créé par David Champagne
 * 2020/05/17
 *
 */
// Section du rond avec la couleur gradiente
var canvas = document.getElementById("mars");
var ctx = canvas.getContext("2d");
ctx.fillRect(10,10,1,1);
ctx.arc(125, 120, 60, 0, 2 * Math.PI);
var gradientColor = ctx.createRadialGradient(125, 120, 30, 125, 125, 100);
gradientColor.addColorStop(0,"orange");
gradientColor.addColorStop(1,"black");
ctx.fillStyle = gradientColor;
ctx.fill();

// Section du texte MARS sur le rond
ctx.beginPath();
ctx.font = "20px Blippo, fantasy";
ctx.fillStyle = "black";
ctx.fillText("MARS", 103,130);
ctx.fill();


// Section des petits étoiles
ctx.beginPath();
ctx.arc(10, 10, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(30, 20, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(50, 30, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 210, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(180, 190, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 210, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(210, 10, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(210, 30, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(20, 200, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(20, 210, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(40, 200, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(5, 60, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(5, 110, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 100, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 120, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 120, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(210, 140, 1, 0, 2 * Math.PI, true);
ctx.strokeStyle = "#FFF";
ctx.stroke();







