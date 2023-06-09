import { clockHero } from '$utils/clock';
import { loadAttributesScript } from '$utils/fs-attributes';
import { greetUser } from '$utils/greet';
import { jqueryCC } from '$utils/jquery';
import { appSwiper, loadSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Dev Mode check
  const name = 'Studio Relief dev - 01.06 - Hey';
  greetUser(name);

  // Load Clock
  clockHero();

  // Load jQuery
  jqueryCC();

  // Load Finsweet Attributes scripts
  Promise.all([
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'
    ),
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js'
    ),
    loadAttributesScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-modal@1/modal.js'),
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'
    ),
  ])
    .then(() => {
      console.log('All Finsweet Attributes scripts loaded');
    })
    .catch((error) => {
      console.error(error);
    });

  // load Swiper
  loadSwiper()
    .then(() => {
      console.log('Swiper script loaded successfully');
      appSwiper();
    })
    .catch((error) => {
      console.error('Error loading Swiper script:', error);
    });

  Promise.all([
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js'
    ),
  ])
    .then(() => {
      console.log('All Finsweet Attributes scripts loaded');
    })
    .catch((error) => {
      console.error(error);
    });

  // Footer - current Year
  const currentYear = new Date().getFullYear();
  const yearElement = document.querySelector('#year-chambord');
  yearElement.textContent = currentYear;
});
