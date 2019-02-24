var prevBTN = document.getElementById("prev");
var nextBTN = document.getElementById("next");
var slides = document.getElementById("slides");
var carousel = document.getElementById("carousel");
var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");
var circle4 = document.getElementById("circle4");
var circle5 = document.getElementById("circle5");
var numSlides = 5;

// Side navigation
nextBTN.onclick = function(){
  var width = carousel.offsetWidth;
  var margin = parseInt(slides.style.marginLeft);
  if (margin <= width * (numSlides - 1) * -1){
    margin = 0;
  }
  else{
    margin -= width;
  }
  slides.style.marginLeft = margin + "px";
  manageCircles(margin, width);
};

prevBTN.onclick = function(){
  var width = carousel.offsetWidth;
  console.log(width);
  var margin = parseInt(slides.style.marginLeft);
  var circle = "circle";
  if (margin >= 0){
    margin = -(width*4);
  }
  else{
    margin += width;
  }
  slides.style.marginLeft = margin + "px";
  manageCircles(margin, width);
};
// Circle Navigation
circle1.onclick = function(){
  var width = carousel.offsetWidth;
  slides.style.marginLeft = width * 0  + "px";
  circle1.style.backgroundColor = "red";
  circle2.style.backgroundColor = "white";
  circle3.style.backgroundColor = "white";
  circle4.style.backgroundColor = "white";
  circle5.style.backgroundColor = "white";
};
circle2.onclick = function(){
  var width = carousel.offsetWidth;
  slides.style.marginLeft = width * -1  + "px";
  circle1.style.backgroundColor = "white";
  circle2.style.backgroundColor = "red";
  circle3.style.backgroundColor = "white";
  circle4.style.backgroundColor = "white";
  circle5.style.backgroundColor = "white";
};
circle3.onclick = function(){
  var width = carousel.offsetWidth;
  slides.style.marginLeft = width * -2  + "px";
  circle1.style.backgroundColor = "white";
  circle2.style.backgroundColor = "white";
  circle3.style.backgroundColor = "red";
  circle4.style.backgroundColor = "white";
  circle5.style.backgroundColor = "white";
};
circle4.onclick = function(){
    var width = carousel.offsetWidth;
    slides.style.marginLeft = width * -3  + "px";
    circle1.style.backgroundColor = "white";
    circle2.style.backgroundColor = "white";
    circle3.style.backgroundColor = "white";
    circle4.style.backgroundColor = "red";
    circle5.style.backgroundColor = "white";
};
circle5.onclick = function(){
    var width = carousel.offsetWidth;
    slides.style.marginLeft = width * -4  + "px";
    circle1.style.backgroundColor = "white";
    circle2.style.backgroundColor = "white";
    circle3.style.backgroundColor = "white";
    circle4.style.backgroundColor = "white";
    circle5.style.backgroundColor = "red";
};
function manageCircles(margin, width){
  circle = Math.abs(margin) / width + 1;
  circle1.style.backgroundColor = "white";
  circle2.style.backgroundColor = "white";
  circle3.style.backgroundColor = "white";
  circle4.style.backgroundColor = "white";
  circle5.style.backgroundColor = "white";
  document.getElementById("circle" + circle).style.backgroundColor = "red";
}