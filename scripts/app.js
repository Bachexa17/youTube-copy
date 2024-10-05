import { contentOptData } from "../data/data.js";

contentOptRender();
contentOptScroll();

function contentOptRender() {
  contentOptData.forEach(data => {
    document.querySelector('.options-box').innerHTML += `<div class="option">${data}</div>`;
  });

};

function contentOptScroll() {
  const scrollElement = document.querySelector('.options-box');
  const elementWidth = scrollElement.clientWidth;
  const scrollSize = (0.10 * elementWidth);
  let scrollState = 0;

  document.querySelector('.right-arrow-img').addEventListener('click', () => {
    scrollElement.style.transform = `translateX(${scrollState -= scrollSize}px)`;
  });

  document.querySelector('.left-arrow-img').addEventListener('click', () => {
    scrollElement.style.transform = `translateX(${scrollState += scrollSize}px)`;
  });

};

