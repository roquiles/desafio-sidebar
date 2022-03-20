const navBtn = document.querySelector(".nav__btn");
const navbar = document.querySelector(".l-navbar");

const view = window.matchMedia("(max-width: 900px)");

navBtn.addEventListener("click", openCloseSidebar);

function openCloseSidebar() {
  navbar.classList.toggle("show");
}

function mediaQuery() {
  if (view.matches) {
    navbar.classList.toggle("show");
  }
}

view.addEventListener("change", mediaQuery);
