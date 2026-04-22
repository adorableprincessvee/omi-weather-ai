// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Get Started buttons -> demo alert
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Hi! OMI AI is coming soon. Stay tuned!");
  });
});

// "Say Hi Omi" demo
document.querySelectorAll(".btn-ghost").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Voice activation coming in Phase 2!");
  });
});

// Smooth reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.6s ease both";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".feature-card, .how-card, .cta").forEach((el) => {
  el.style.opacity = "0";
  observer.observe(el);
});

