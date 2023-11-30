import $ from 'jquery';

function jqueryCC(): void {
  // Hide preheader & move navbar when scroll
  $(window).scroll(() => {
    const windowScrollTop = $(window)?.scrollTop() || 0;

    if (windowScrollTop > 200 && $('.navbar_bg-when-scrolled').css('display') === 'block') {
      $('.navbar_bg-when-scrolled').css({ transform: 'translateY(0rem)' });
    } else {
      $('.navbar_bg-when-scrolled').css({ transform: 'translateY(-7rem)' });
    }
  });

  // Scroll logo home
  $(window).scroll(() => {
    if (($(window)?.scrollTop() || 0) > 200) {
      $('.home-hero_logo').css({
        'max-height': '4rem',
        'margin-top': '-1.5rem',
        'margin-left': '-1.5rem',
      });
    } else {
      $('.home-hero_logo').css({
        'max-height': '',
        'margin-top': '',
        'margin-left': '',
      });
    }
  });

  // Grid CMS
  $(document).ready(() => {
    $('.programmation_item').each(function () {
      const gridColumnValue = 'span ' + $(this).children('.column-span-size').text().trim();
      $(this).css('grid-column', gridColumnValue);
    });
  });

  // Checkbox filter
  setTimeout(() => {
    const uniqueTexts = new Set<string>();
    document.querySelectorAll('.checkbox-filter').forEach((div) => {
      const textContent = div.textContent?.trim() ?? '';
      if (uniqueTexts.has(textContent)) {
        div.parentNode?.removeChild(div);
      }
      uniqueTexts.add(textContent);
    });
  }, 0);

  // Autoplay video in iOS
  $('body').on('click touchstart', () => {
    const videoElements = document.getElementsByClassName('home-hero_bg-video');
    Array.from(videoElements).forEach((videoElement: Element) => {
      const htmlVideoElement = videoElement as HTMLVideoElement;
      if (htmlVideoElement.paused || htmlVideoElement.ended) {
        $(htmlVideoElement).trigger('play');
      }
    });
  });

  // Reload on click logo home
  $('.home-hero_logo').click(() => {
    location.reload();
  });
}

export { jqueryCC };
