import { renderThumbnails } from './thumbnails.js';
import { debounce } from './util.js';

const RANDOM_PHOTOS_LIMIT = 10;
const FILTER_DELAY = 500;

const filtersSection = document.querySelector('.img-filters');
const filtersForm = filtersSection.querySelector('.img-filters__form');

const FilterType = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const shuffleRandomly = () => Math.random() - 0.5;

const sortByCommentCount = (firstPhoto, secondPhoto) => secondPhoto.comments.length - firstPhoto.comments.length;

let activeFilter = FilterType.DEFAULT;
let photosCollection = [];

const getFilteredPhotos = () => {
  switch (activeFilter) {
    case FilterType.RANDOM:
      return [...photosCollection].sort(shuffleRandomly).slice(0, RANDOM_PHOTOS_LIMIT);
    case FilterType.DISCUSSED:
      return [...photosCollection].sort(sortByCommentCount);
    default:
      return [...photosCollection];
  }
};
