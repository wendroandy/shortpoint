const finish = document.querySelector(".finish");
const green = document.querySelector(".green .fill");
const red = document.querySelector(".red .fill");
const white = document.querySelector(".white .fill");
const blue = document.querySelector(".blue .fill");
const yellow = document.querySelector(".yellow .fill");

finish.addEventListener("click",function(){
  green.style.width ="100%";
  green.innerHTML="<span>100%</span>";
  red.style.width ="100%";
  red.innerHTML="<span>100%</span>";
  white.style.width ="100%";
  white.innerHTML="<span>100%</span>";
  blue.style.width ="100%";
  blue.innerHTML="<span>100%</span>";
  yellow.style.width ="100%";
  yellow.innerHTML="<span>100%</span>";
})