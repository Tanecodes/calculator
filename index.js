const display = document.querySelector("#display");
const button = document.querySelectorAll("button");

button.forEach(function(buttons){
  buttons.addEventListener("click",function(){
    const value = display.textContent;
    display.textContent = value;
  });
});