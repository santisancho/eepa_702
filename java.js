document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-buttons button");
  const groups  = document.querySelectorAll(".group");

  // Mostrar todo por defecto
  groups.forEach(g => g.style.display = "block");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Estado activo visual
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      groups.forEach(group => {
        const category = group.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          group.style.display = "block";
          group.style.opacity = "1";
          group.style.transition = "opacity .2s ease";
        } else {
          group.style.opacity = "0";
          // Pequeño delay para un fade-out suave
          setTimeout(() => { group.style.display = "none"; }, 150);
        }
      });
    });
  });
});



// Menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Cierra el menú al hacer clic en un link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});
