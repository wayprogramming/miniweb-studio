const toggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.textContent = isOpen ? "×" : "☰";
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.textContent = "☰";
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const animatedItems = document.querySelectorAll(".drink, .special-photo, .special-content, .visit-details");

if ("IntersectionObserver" in window) {
  document.body.classList.add("js-ready");
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animatedItems.forEach(item => observer.observe(item));
}