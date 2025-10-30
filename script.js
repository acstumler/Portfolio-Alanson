const y=document.getElementById("y");if(y){y.textContent=new Date().getFullYear()}
const t=document.getElementById("themeToggle");
if(t){t.addEventListener("click",()=>{document.documentElement.style.colorScheme=document.documentElement.style.colorScheme==="light"?"dark":"light"})}
