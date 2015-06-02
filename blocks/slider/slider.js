/**
 * Created by Aleksandr Pashnin
 */

function nextContentPage(dir) {

   var contents = document.querySelectorAll('.slider-page--active .slider-page__content');

   for (var i = 0; i < contents.length; i++) {
      if (contents[i].classList.contains('slider-page__content--active')) {
         contents[i].classList.toggle('slider-page__content--active', false);
         break;
      }
   }

   var nextIndex = calculateIndex(i, contents.length - 1, dir);
   contents[nextIndex].classList.toggle('slider-page__content--active', true);

}

function calculateIndex(currentIndex, maxValue, direcion) {

   if (direcion < 0) {
      if (currentIndex == 0) {
         currentIndex = maxValue;
      } else {
         currentIndex--;
      }
   } else {
      if (currentIndex == maxValue) {
         currentIndex = 0;
      } else {
         currentIndex++;
      }
   }

   return currentIndex;

}

function changeSliderPage(event) {

   event.preventDefault();

   if (event.target.classList.contains('slider__switcher--active')) {
      return;
   }

   var nextPage = 0;
   var switchers = document.querySelectorAll('.slider__switcher');
   for (var i = 0; i < switchers.length; i++) {

      if (switchers[i].classList.contains('slider__switcher--active')) {
         switchers[i].classList.toggle('slider__switcher--active', false);
         if (switchers[i].target == event.target) {
            alert('alas');
         }
      }

      if (event.target == switchers[i]) {
         nextPage = i;
      }

   }

   event.target.classList.toggle('slider__switcher--active', true);

   var pages = document.querySelectorAll('.slider-page');
   for (var i = 0; i < pages.length; i++) {
      pages[i].classList.toggle('slider-page--active', false);
   }
   pages[nextPage].classList.toggle('slider-page--active', true);

}
