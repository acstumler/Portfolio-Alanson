const y=document.getElementById("y");if(y){y.textContent=new Date().getFullYear()}
const t=document.getElementById("themeToggle");if(t){t.addEventListener("click",()=>{document.documentElement.style.colorScheme=document.documentElement.style.colorScheme==="light"?"dark":"light"})}
const layers=document.querySelectorAll(".hero .layer");window.addEventListener("scroll",()=>{const y=window.scrollY;layers.forEach((el,i)=>{el.style.transform=`translateY(${y*(0.05+i*0.035)}px)`})})
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll(".reveal").forEach(s=>io.observe(s));
