window.addEventListener('DOMContentLoaded', () => {
  'use strict';
});
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const menuBackToContent = document.querySelector('.menu__back-to-content');

console.log(headerBurger);

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  document.body.classList.toggle('lock');
});

menuBackToContent.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  document.body.classList.toggle('lock');
});
