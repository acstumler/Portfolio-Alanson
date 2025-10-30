const y=document.getElementById("y");if(y){y.textContent=new Date().getFullYear()}
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(s=>io.observe(s));
