const numbers = document.querySelectorAll(".num");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const display = document.querySelector(".display");
  
numbers.forEach(function(button) {
  button.addEventListener("click", function() {
    display.textContent += button.textContent;
  }); 
});

clear.addEventListener("click",function(){
  display.textContent = "";
});

equals.addEventListener("click",function(){
  
});