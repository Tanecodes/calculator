const numbers = document.querySelectorAll(".num");
const display = document.querySelector(".display");

let previnput = "";
let currentinput = "";
let operator = "";
let result = "";
  
numbers.forEach(function(button) {
  button.addEventListener("click", function() {
    display.textContent += button.textContent;
  }); 
});
document.querySelector(".clear").addEventListener("click",function(){
  display.textContent = "";
});
document.querySelector(".add").addEventListener("click",function(){
  let add = document.querySelector(".add").textContent;
  display.textContent = display.textContent + add;
});
document.querySelector(".minus").addEventListener("click",function(){
  let minus = document.querySelector(".minus").textContent;
  display.textContent = display.textContent + minus;
});
document.querySelector(".times").addEventListener("click",function(){
  let times = document.querySelector(".times").textContent;
  display.textContent = display.textContent + times;
})
document.querySelector("equals").addEventListener("click",function(){
  let expression = display.textContent;
  
});
 
