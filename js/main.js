"use strict";

//! Инициализация анимаций при скроллинге
AOS.init();

//! Инициализация слайдера
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2000,
  },
  speed: 700,
  loop: true,
  simulateTouch: true,
  spaceBetween: 30,
  slidesPerView: 1,
  initialSlide: 1,
  effect: "cards",
});

//! Перекрашивание шапки при скролле
const header = document.querySelector("header");
if (window.scrollY > 0) {
  header.classList.add("_scrolled");
}
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("_scrolled");
  } else header.classList.remove("_scrolled");
});

//! Меню-бургер в мобилке
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", toggleMenu);

nav.addEventListener("click", (e) => {
  if (e.target.tagName !== "A") return;
  toggleMenu();
});

function toggleMenu() {
  menuBtn.classList.toggle("_active");
  nav.classList.toggle("_active");
}
