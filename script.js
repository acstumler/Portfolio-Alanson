const y=document.getElementById("y");if(y){y.textContent=new Date().getFullYear()}
const c=document.getElementById("contrast");if(c){c.addEventListener("click",()=>{document.documentElement.style.colorScheme=document.documentElement.style.colorScheme==="light"?"dark":"light"})}
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll(".reveal").forEach(s=>io.observe(s));
