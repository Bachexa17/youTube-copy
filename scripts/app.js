import { videoData, contentOptData } from "../data/data.js";

contentOptRender();
contentOptScroll();
contentRender();

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

function contentRender() {
  let html = '';
  videoData.forEach(data => {
    html += `
    <a href="https://www.youtube.com/${data.videoLink}">
      <div class="video" id="${data.videoId}">
        <div class="video-image-box">
          <img class="video-image" src="${data.videoImage}">
          <div class="video-length-overlay">${data.videoLength}</div>
        </div>
        <div class="video-info">
          <img class="channel-image" src="${data.channelImage}">
          <div class="video-info-column">
            <div class="video-title">${data.videoTitle}</div>
            <div class="channel-name">${data.channelName}</div>
            <div class="video-info-column-row">
              <div class="video-views">${data.videoViews}</div>
              &#8226
              <div class="video-age">${data.videoAge}</div>
            </div>
          </div>
          <img class="video-menu" src="images/main/video-menu.svg">
        </div>
      </div>
    </a>
    `;
  });
  document.querySelector('.content-container').innerHTML = html;
};

