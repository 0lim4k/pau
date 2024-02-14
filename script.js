document.addEventListener("DOMContentLoaded", function() {
    const particleCount = 200; // Cambia el número de partículas según lo necesites
    const particles = document.getElementById("particles");
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      
      // Asigna posiciones aleatorias
      const randomX = Math.floor(Math.random() * window.innerWidth);
      const randomY = Math.floor(Math.random() * window.innerHeight);
      particle.style.left = randomX + "px";
      particle.style.top = randomY + "px";
      
      particles.appendChild(particle);
    }
  });
  