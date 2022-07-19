const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("toggle-menu"),
  closeMenu = document.getElementById("close-menu");
  

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

window.addEventListener("scroll", (e) => {
  const header = document.querySelector(".shadow");
  if (window.pageYOffset > 0) {
    header.classList.add("add-shadow");
  } else {
    header.classList.remove("add-shadow");
  }
});

$("input").on("change", function () {
  $("body").toggleClass("blue");
});
