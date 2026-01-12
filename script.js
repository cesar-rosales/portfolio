const spotlight = document.querySelector(".spotlight");
const hero = document.querySelector(".hero");
const unlockBtn = document.querySelector("#unlockBtn");
const projects = document.querySelector("#projects");
const yearEl = document.querySelector("#year");

yearEl.textContent = new Date().getFullYear();

window.addEventListener("mousemove", (e) => {
  const xPercent = (e.clientX / window.innerWidth) * 100;
  const yPercent = (e.clientY / window.innerHeight) * 100;

  // Spotlight position
  spotlight.style.setProperty("--x", `${xPercent}%`);
  spotlight.style.setProperty("--y", `${yPercent}%`);

  // Hero glow center
  hero.style.setProperty("--hx", `${xPercent}%`);
  hero.style.setProperty("--hy", `${yPercent}%`);

  // Subtle parallax offset
  const px = (e.clientX - window.innerWidth / 2) * 0.01;
  const py = (e.clientY - window.innerHeight / 2) * 0.01;
  hero.style.setProperty("--px", `${px}px`);
  hero.style.setProperty("--py", `${py}px`);
});

unlockBtn.addEventListener("click", () => {
  projects.scrollIntoView({ behavior: "smooth" });

  // temporary “unlock” feedback
  unlockBtn.textContent = "Vault Open ✓";
  unlockBtn.disabled = true;
  unlockBtn.style.opacity = "0.85";

  // re-lock after 3 seconds
  setTimeout(() => {
    unlockBtn.textContent = "Open the Vault →";
    unlockBtn.disabled = false;
    unlockBtn.style.opacity = "1";
    unlockBtn.blur();
  }, 3000);
});
