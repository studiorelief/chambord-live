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
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js'
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

  // Traduire les dates - A TESTER EN LOCAL
  // Mapping entre les jours et mois en anglais et en français
  const textMapping = {
    Monday: 'Lundi',
    Tuesday: 'Mardi',
    Wednesday: 'Mercredi',
    Thursday: 'Jeudi',
    Friday: 'Vendredi',
    Saturday: 'Samedi',
    Sunday: 'Dimanche',
    January: 'Janvier',
    February: 'Février',
    March: 'Mars',
    April: 'Avril',
    May: 'Mai',
    June: 'Juin',
    July: 'Juillet',
    August: 'Août',
    September: 'Septembre',
    October: 'Octobre',
    November: 'Novembre',
    December: 'Décembre',
  };

  // Fonction pour traduire un jour ou un mois en anglais en français
  function translateText(text) {
    return textMapping[text] || 'Text not found';
  }

  // Sélectionner toutes les divs avec la classe 'hero-type-2_day' et traduire leur contenu
  const textDivs = document.querySelectorAll('.hero-type-2_trad');
  if (textDivs) {
    textDivs.forEach(function (textDiv) {
      const englishText = textDiv.textContent;
      const frenchText = translateText(englishText);
      textDiv.textContent = frenchText;
    });
  }
});
