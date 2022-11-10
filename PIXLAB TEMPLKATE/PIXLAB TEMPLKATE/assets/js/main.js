// ANIMATION MOSUMOVE -- PARALLAX

document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

//NAV SHADOW SCROLLY
window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav");
  nav.classList.toggle("nav-show", window.scrollY > 0);
});

//MENU SHOW
const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
btnMenu.addEventListener("click", function () {
  menu.classList.add("menu-show");
});
btnClose.addEventListener("click", function () {
  menu.classList.remove("menu-show");
});


