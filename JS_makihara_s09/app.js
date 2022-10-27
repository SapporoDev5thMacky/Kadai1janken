var circle = document.getElementById("circle");
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");


var btn0 = document.getElementById("btn0");
var choise0 = function(){
mine.src = "img/janken_0.jpg";
var rand = Math.round(Math.random() * 2);
hers.src = "img/janken_" + rand + ".jpg";
if(rand === 0){
  boxC.innerHTML = 'あいこ';}
  else if(rand === 1){
    boxC.innerHTML = '勝ち';
  } else {
    boxC.innerHTML = '負け';
  }
var rotateValue = circle.style.transform;
var rotateSum;
  rotateSum = rotateValue + "rotate(120deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  }
btn0.onclick = choise0

var btn1 = document.getElementById("btn1");
var choise1 = function(){
mine.src = "img/janken_1.jpg";
var rand = Math.round(Math.random() * 2);
hers.src = "img/janken_" + rand + ".jpg";
if(rand === 0){
  boxC.innerHTML = '負け';}
  else if(rand === 1){
    boxC.innerHTML = 'あいこ';
  } else {
    boxC.innerHTML = '勝ち';
  }
var rotateValue = circle.style.transform;
var rotateSum;
  rotateSum = rotateValue + "rotate(120deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  }
btn1.onclick = choise1


var btn2 = document.getElementById("btn2");
var choise2 = function(){
mine.src = "img/janken_2.jpg";
var rand = Math.round(Math.random() * 2);
hers.src = "img/janken_" + rand + ".jpg";
if(rand === 0){
  boxC.innerHTML = '勝ち';}
  else if(rand === 1){
    boxC.innerHTML = '負け';
  } else {
    boxC.innerHTML = 'あいこ';
  }
var rotateValue = circle.style.transform;
var rotateSum;
  rotateSum = rotateValue + "rotate(120deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  }
btn2.onclick = choise2




// // btn0.onclick = choise0 このやり方だと1つイベントしか実行されない
// btn0.addEventListener('click', rotateValue);
// var rotateValue = circle.style.transform;
// var rotateSum;
//   rotateSum = rotateValue + "rotate(120deg)";
//   circle.style.transform = rotateSum;
//   rotateValue = rotateSum;
  

// var btn0 = document.getElementById("btn0");

// var choise0 = function(){
// mine.src = "img/janken_0.jpg";
// var rand = Math.round(Math.random() * 2);
// hers.src = "img/janken_" + rand + ".jpg";
// if(rand === 0){
//   boxC.innerHTML = 'あいこ';}
//   else if(rand === 1){
//     boxC.innerHTML = '勝ち';
//   } else {
//     boxC.innerHTML = '負け';
//   }
//   }
// btn0.addEventListener('click', choise0);

// var btn1 = document.getElementById("btn1");
// var choise1 = function(){
// mine.src = "img/janken_1.jpg";
// var rand = Math.round(Math.random() * 2);
// hers.src = "img/janken_" + rand + ".jpg";
// if(rand === 0){
//   boxC.innerHTML = '負け';}
//   else if(rand === 1){
//     boxC.innerHTML = 'あいこ';
//   } else {
//     boxC.innerHTML = '勝ち';
//   }
//   }
// btn1.onclick = choise1