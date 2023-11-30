import $ from 'jquery';

function loadSwiper(): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load swiper script'));
    document.head.appendChild(script);
  });
}

function appSwiper() {
  // swiper show - programmation
  $('.new-swiper').each(function () {
    new Swiper($(this).find('.swiper')[0], {
      direction: 'horizontal',
      followFinger: true,
      loop: true,
      centeredSlides: true,
      autoHeight: false,
      freeMode: false,
      slideToClickedSlide: true,
      slidesPerView: 'auto',
      spaceBetween: 32,
      slidesPerGroup: 1,
      rewind: true,
      speed: 750,
      navigation: {
        nextEl: '.programmation_arrow-right',
        prevEl: '.programmation_arrow-left',
      },
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        thresholdDelta: 1,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
        992: {
          slidesPerView: 'auto',
          spaceBetween: '12.5%',
        },
      },
      slideActiveClass: 'is-active',
      slideDuplicateActiveClass: 'is-active',
    });
  });

  // swiper show - actualités
  $('.actualites_swiper').each(function () {
    new Swiper($(this).find('.swiper')[0], {
      direction: 'horizontal',
      followFinger: true,
      loop: true,
      centeredSlides: false,
      autoHeight: false,
      freeMode: false,
      slideToClickedSlide: true,
      slidesPerView: 'auto',
      spaceBetween: 32,
      slidesPerGroup: 1,
      rewind: true,
      speed: 750,
      navigation: {
        nextEl: '.actualites_arrow-right',
        prevEl: '.actualites_arrow-left',
      },
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        thresholdDelta: 1,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
        992: {
          slidesPerView: 'auto',
          spaceBetween: '12.5%',
        },
      },
      slideActiveClass: 'is-active',
      slideDuplicateActiveClass: 'is-active',
    });
  });

  // swiper show - actualités inner
  $('.actualites_swiper-inner').each(function () {
    new Swiper($(this).find('.swiper')[0], {
      direction: 'horizontal',
      followFinger: true,
      loop: true,
      centeredSlides: false,
      autoHeight: false,
      freeMode: false,
      slideToClickedSlide: false,
      slidesPerView: 'auto',
      spaceBetween: 32,
      slidesPerGroup: 1,
      rewind: true,
      speed: 750,
      navigation: {
        nextEl: '.actualites_arrow-right',
        prevEl: '.actualites_arrow-left',
      },
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        thresholdDelta: 1,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
        992: {
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
      },
      slideActiveClass: 'is-active',
      slideDuplicateActiveClass: 'is-active',
    });
  });
}

export { appSwiper, loadSwiper };
