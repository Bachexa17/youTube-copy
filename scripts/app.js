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
  const scrollElementWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
  const scrollWidth = (scrollElementWidth / 100) * 25;
  let scrollState = 0
  scrollElement.scrollLeft = 0;
  checkArrow();

  document.querySelector('.right-arrow-img').addEventListener('click', () => {
    scrollElement.scrollLeft = scrollState += scrollWidth;
    checkArrow();
  });

  document.querySelector('.left-arrow-img').addEventListener('click', () => {
    scrollElement.scrollLeft = scrollState -= scrollWidth;
    checkArrow();
  });

  function checkArrow() {
    const rightArrowElement = document.querySelector('.right-arrow');
    const leftArrowElement = document.querySelector('.left-arrow');
    console.log(scrollElement.scrollLeft)
    console.log(scrollState)

    rightArrowElement.style.visibility = 'visible';
    leftArrowElement.style.visibility = 'hidden';

    if (scrollState === scrollElementWidth) {
      rightArrowElement.style.visibility = 'hidden';
    };
    if (scrollState > 0) {
      leftArrowElement.style.visibility = 'visible';
    };
  };

};

