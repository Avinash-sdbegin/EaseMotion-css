const button=document.getElementById("burstBtn");
const particles=document.querySelectorAll(".particles i");

particles.forEach(p=>{

p.style.setProperty("--x",(Math.random()*2-1).toFixed(2));
p.style.setProperty("--y",(Math.random()*2-1).toFixed(2);

});

button.addEventListener("click",()=>{

button.classList.remove("active");

void button.offsetWidth;

button.classList.add("active");

});