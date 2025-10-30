const y=document.getElementById("y");if(y){y.textContent=new Date().getFullYear()}
const c=document.getElementById("contrast");if(c){c.addEventListener("click",()=>{document.documentElement.style.colorScheme=document.documentElement.style.colorScheme==="light"?"dark":"light"})}
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}})},{threshold:.1});document.querySelectorAll(".reveal").forEach(s=>io.observe(s));
let last=0;window.addEventListener("scroll",()=>{const y=window.scrollY,dy=Math.min(30,Math.max(-30,y-last));last=y;document.querySelector(".backdrop").style.transform=`translateY(${dy*-0.6}px)`});
