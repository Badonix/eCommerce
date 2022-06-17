const hamBurger = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closeBtn = document.getElementById("close");

if (hamBurger) {
  hamBurger.addEventListener("click", function () {
    nav.classList.add("active");
  });
}
if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}
