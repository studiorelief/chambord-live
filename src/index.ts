import { clockHero } from '$utils/clock';
import { loadAttributesScript } from '$utils/fs-attributes';
import { greetUser } from '$utils/greet';
import { jqueryCC } from '$utils/jquery';
import { initializePage } from '$utils/quickAdj';
import { appSwiper, loadSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Dev Mode check
  const name = 'Studio Relief dev - 30.11 - Hey';
  greetUser(name);

  // Load Clock
  clockHero();

  // Load jQuery
  jqueryCC();

  // Load initializePage
  initializePage();

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
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js'
    ),
    loadAttributesScript('https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js'),
  ]);

  // load Swiper
  loadSwiper().then(() => {
    appSwiper();
  });
});
