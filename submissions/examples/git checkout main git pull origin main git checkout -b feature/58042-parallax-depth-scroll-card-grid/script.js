const cards = document.querySelectorAll(".portfolio-card");

// Scroll Parallax
window.addEventListener("scroll", () => {
  const scroll = window.pageYOffset;

  cards.forEach(card => {
    const speed = parseFloat(card.dataset.speed);
    card.style.transform = `translateY(${scroll * speed}px)`;
  });
});

// Reveal Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".reveal").forEach(item => {
  observer.observe(item);
});

// Mouse Tilt Effect
cards.forEach(card => {

  card.addEventListener("mousemove", e => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 18;
    const rotateX = (rect.height / 2 - y) / 18;

    card.style.transform += ` rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });

});