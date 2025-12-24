import { showBigPicture } from './big-picture.js';

const picturesContainerElement = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

function generateThumbnail(photoData) {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);

  const imageElement = thumbnailElement.querySelector('.picture__img');
  imageElement.src = photoData.url;
  imageElement.alt = photoData.description;

  thumbnailElement.querySelector('.picture__likes').textContent = photoData.likes;
  thumbnailElement.querySelector('.picture__comments').textContent = photoData.comments.length;

  thumbnailElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPicture(photoData);
  });

  return thumbnailElement;
}

function renderThumbnails(photosArray) {
  const existingThumbnails = picturesContainerElement.querySelectorAll('.picture');
  existingThumbnails.forEach((thumbnail) => thumbnail.remove());

  const fragment = document.createDocumentFragment();

  photosArray.forEach((photoItem) => {
    const thumbnail = generateThumbnail(photoItem);
    fragment.appendChild(thumbnail);
  });

  picturesContainerElement.appendChild(fragment);
}

export { renderThumbnails };
