const DEFAULT_SCALE_VALUE = 100;
const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;
const SCALE_INCREMENT = 25;

const scaleValueInput = document.querySelector('.scale__control--value');
const increaseButton = document.querySelector('.scale__control--bigger');
const reduceButton = document.querySelector('.scale__control--smaller');
const previewImage = document.querySelector('.img-upload__preview img');

const applyScale = (scalePercentage) => {
  previewImage.style.transform = `scale(${scalePercentage / 100})`;
  scaleValueInput.value = `${scalePercentage}%`;
};

const handleReduceClick = function() {
  const currentScale = parseInt(scaleValueInput.value, 10);
  let newScale = currentScale - SCALE_INCREMENT;
  if (newScale < MIN_SCALE_VALUE) {
    newScale = MIN_SCALE_VALUE;
  }
  applyScale(newScale);
};

const handleIncreaseClick = () => {
  const currentScale = parseInt(scaleValueInput.value, 10);
  let newScale = currentScale + SCALE_INCREMENT;
  if (newScale > MAX_SCALE_VALUE) {
    newScale = MAX_SCALE_VALUE;
  }
  applyScale(newScale);
};

const resetScale = () => {
  applyScale(DEFAULT_SCALE_VALUE);
};

const initScale = () => {
  reduceButton.addEventListener('click', handleReduceClick);
  increaseButton.addEventListener('click', handleIncreaseClick);
};

export { resetScale, initScale };
