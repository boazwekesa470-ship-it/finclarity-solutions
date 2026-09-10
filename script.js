document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
