function jqueryCC() {
  // Hide preheader & move navbar when scroll
  $(window).scroll(function () {
    const windowScrollTop = $(this).scrollTop();

    if (windowScrollTop > 200 && $('.navbar_bg-when-scrolled').css('display') === 'block') {
      $('.navbar_bg-when-scrolled').css({
        transform: 'translateY(0rem)',
      });
    } else {
      $('.navbar_bg-when-scrolled').css({
        transform: 'translateY(-7rem)',
      });
    }
  });

  // Scroll logo home
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
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
  $(document).ready(function () {
    $('.programmation_item').each(function () {
      $(this).css('grid-column', 'span ' + $(this).children('.column-span-size').text().trim());
      console.log('column span added');
    });
  });

  // Checkbox filter
  // Avoid duplicate categories filters - From body global
  setTimeout(function () {
    const rr = new Set();
    for (const div of document.querySelectorAll('.checkbox-filter')) {
      if (rr.has(div.textContent.trim())) {
        div.parentNode.removeChild(div);
      }
      rr.add(div.textContent.trim());
    }
  }, 0);

  // Autoplay video in iOS
  //PLAYS VIDEO IN LOW POWER MODE - Deploy on 1.4
  $('body').on('click touchstart', function () {
    const videoElement = document.getElementsByClassName('home-hero_bg-video');
    if (videoElement.playing) {
    } else {
      $('.home-hero_bg-video').trigger('play');
    }
  });

  // Reload on clic logo home
  $('.home-hero_logo').click(function () {
    location.reload();
  });
}
export { jqueryCC };
