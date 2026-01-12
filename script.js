const spotlight = document.querySelector(".spotlight");
const unlockBtn = document.querySelector("#unlockBtn");
const projects = document.querySelector("#projects");
const yearEl = document.querySelector("#year");

yearEl.textContent = new Date().getFullYear();

window.addEventListener("mousemove", (e) => {
  const x = `${(e.clientX / window.innerWidth) * 100}%`;
  const y = `${(e.clientY / window.innerHeight) * 100}%`;
  spotlight.style.setProperty("--x", x);
  spotlight.style.setProperty("--y", y);
});

unlockBtn.addEventListener("click", () => {
  projects.scrollIntoView({ behavior: "smooth" });

  // small “unlock” feedback
  unlockBtn.textContent = "Vault Open ✓";
  unlockBtn.disabled = true;
  unlockBtn.style.opacity = "0.85";
});
