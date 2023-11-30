function initializePage(): void {
  // Mappage entre les jours et mois en anglais et en français
  const textMapping: { [key: string]: string } = {
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

  // Fonction pour traduire un texte anglais en français
  function translateText(text: string): string {
    return textMapping[text] || text;
  }

  // Mise à jour de l'année dans le footer
  const currentYear: number = new Date().getFullYear();
  const yearElement: HTMLElement | null = document.querySelector('#year-chambord');
  if (yearElement) yearElement.textContent = currentYear.toString();

  // Traduction des textes
  const textDivs: NodeListOf<HTMLElement> = document.querySelectorAll('.hero-type-2_trad');
  textDivs.forEach((textDiv: HTMLElement) => {
    const englishText: string = textDiv.textContent || '';
    const frenchText: string = translateText(englishText);
    textDiv.textContent = frenchText;
  });

  // Masquer le logo sur la page d'accueil pour les tablettes
  window.onload = (): void => {
    const path: string = window.location.pathname;
    const page: string = path.split('/').pop() || '';
    const maxTabletWidth = 768;

    if ((page === '' || page === 'index.html') && window.innerWidth <= maxTabletWidth) {
      const homeHeroLogo: HTMLElement | null = document.querySelector('.home-hero_logo');
      const navbarLogoImg: HTMLElement | null = document.querySelector('.navbar_logo-img');

      if (homeHeroLogo) homeHeroLogo.style.display = 'none';
      if (navbarLogoImg) navbarLogoImg.style.display = 'block';
    }
  };
}

// Appel de la fonction pour initialiser la page
export { initializePage };
