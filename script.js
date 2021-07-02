window.addEventListener('DOMContentLoaded', () => {
  'use strict';
});
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const menuBacktocontent = document.querySelector('.menu__backtocontent');

console.log(headerBurger);

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  document.body.classList.toggle('lock');
});

menuBacktocontent.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  document.body.classList.toggle('lock');
});
