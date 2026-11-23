const toggle=document.querySelector("#menuToggle");
const nav=document.querySelector("#nav");
if(toggle&&nav){
  toggle.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    toggle.textContent=open?"×":"☰";
    toggle.setAttribute("aria-expanded",String(open));
  });
  nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    nav.classList.remove("open");
    toggle.textContent="☰";
    toggle.setAttribute("aria-expanded","false");
  }));
}
const animated=document.querySelectorAll(".drink,.feature-photo,.feature-copy,.visit-info");
if("IntersectionObserver" in window){
  document.body.classList.add("js-ready");
  const observer=new IntersectionObserver((entries,obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("visible");obs.unobserve(entry.target);}
    });
  },{threshold:.12});
  animated.forEach(item=>observer.observe(item));
}