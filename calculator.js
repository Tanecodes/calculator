const numbers = document.querySelectorAll(".num");
const display = document.querySelector(".display");

// number buttons loop  
numbers.forEach(function(button) {
  button.addEventListener("click", function() {
    display.textContent += button.textContent;
  }); 
});
// clear button
document.querySelector(".clear").addEventListener("click",function(){
  display.textContent = "";
});
// add button
document.querySelector(".add").addEventListener("click",function(){
  let add = document.querySelector(".add").textContent;
  display.textContent = display.textContent + add;
});
// minus button
document.querySelector(".minus").addEventListener("click",function(){
  let minus = document.querySelector(".minus").textContent;
  display.textContent = display.textContent + minus;
});
// times button
document.querySelector(".times").addEventListener("click",function(){
  let times = document.querySelector(".times").textContent;
  display.textContent = display.textContent + times;
})
//equals button
document.querySelector(".equals").addEventListener("click",function(){
  let expression = display.textContent;
  expression = expression.replace("x","*");

  try{
    let result = eval(expression);
    display.textContent = result;
  }catch{(error)
    display.textContent = "error"
  }
});
 
