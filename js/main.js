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
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
});

//! Перекрашивание шапки при скролле
const header = document.querySelector("header");

if (window.scrollY > 0) {
  header.classList.add("_scrolled");
}

document.addEventListener("scroll", () => {
  window.scrollY > 0
    ? header.classList.add("_scrolled")
    : header.classList.remove("_scrolled");
});

//! Меню-бургер в мобилке
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.contains("_active") ? hideMenu() : showMenu();
});

//? Закрывание бургер-меню при клике вне меню
document.addEventListener("click", (e) => {
  if (e.target === nav) return;
  if (e.target === menuBtn) return;
  hideMenu();
});

//? Закрывание бургер-меню при нажатии на клавишу Escape
document.addEventListener("keyup", (e) => {
  if (e.code !== "Escape") return;
  hideMenu();
});

function showMenu() {
  menuBtn.classList.add("_active");
  nav.classList.add("_active");
  document.body.classList.add("_locked");
}

function hideMenu() {
  menuBtn.classList.remove("_active");
  nav.classList.remove("_active");
  document.body.classList.remove("_locked");
}

//! Вывод значений формы в консоль
const mainForm = document.getElementById("main-form");
const allInputs = mainForm.querySelectorAll("input");

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  allInputs.forEach((input) => console.log(input.value));
});
