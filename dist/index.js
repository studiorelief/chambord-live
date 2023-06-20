"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/clock.ts
  function clockHero() {
    const deadline = "2023/09/12 18:00";
    function pad(num, size) {
      const s = "0" + num;
      return s.substr(s.length - size);
    }
    function parseDate(date) {
      const parsed = Date.parse(date);
      if (!isNaN(parsed))
        return parsed;
      return Date.parse(date.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
    }
    function getTimeRemaining(endtime) {
      const total = parseDate(endtime) - Date.parse(/* @__PURE__ */ new Date());
      const seconds = Math.floor(total / 1e3 % 60);
      const minutes = Math.floor(total / 1e3 / 60 % 60);
      const hours = Math.floor(total / (1e3 * 60 * 60) % 24);
      const days = Math.floor(total / (1e3 * 60 * 60 * 24));
      return { total, days, hours, minutes, seconds };
    }
    function clock(id, endtime) {
      const days = document.getElementById(id + "-days");
      const hours = document.getElementById(id + "-hours");
      const minutes = document.getElementById(id + "-minutes");
      const seconds = document.getElementById(id + "-seconds");
      var timeinterval = setInterval(function() {
        const time = getTimeRemaining(endtime);
        if (time.total <= 0) {
          clearInterval(timeinterval);
        } else {
          days.innerHTML = pad(time.days, 2);
          hours.innerHTML = pad(time.hours, 2);
          minutes.innerHTML = pad(time.minutes, 2);
          seconds.innerHTML = pad(time.seconds, 2);
        }
      }, 1e3);
    }
    clock("js-clock", deadline);
  }

  // src/utils/fs-attributes.ts
  function loadAttributesScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.head.appendChild(script);
    });
  }

  // node_modules/.pnpm/@finsweet+ts-utils@0.39.1/node_modules/@finsweet/ts-utils/dist/webflow/getPublishDate.js
  var getPublishDate = (page = document) => {
    const publishDatePrefix = "Last Published:";
    for (const node of page.childNodes) {
      if (node.nodeType === Node.COMMENT_NODE && node.textContent?.includes(publishDatePrefix)) {
        const publishDateValue = node.textContent.trim().split(publishDatePrefix)[1];
        if (publishDateValue)
          return new Date(publishDateValue);
      }
    }
  };

  // src/utils/greet.ts
  var greetUser = (name) => {
    const publishDate = getPublishDate();
    console.log(`Hello ${name}!`);
    console.log(
      `This site was last published on ${publishDate?.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      })}.`
    );
  };

  // src/utils/jquery.ts
  function jqueryCC() {
    $(window).scroll(function() {
      const windowScrollTop = $(this).scrollTop();
      if (windowScrollTop > 200 && $(".navbar_bg-when-scrolled").css("display") === "block") {
        $(".navbar_bg-when-scrolled").css({
          transform: "translateY(0rem)"
        });
      } else {
        $(".navbar_bg-when-scrolled").css({
          transform: "translateY(-7rem)"
        });
      }
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $(".home-hero_logo").css({
          "max-height": "4rem",
          "margin-top": "-1.5rem",
          "margin-left": "-1.5rem"
        });
      } else {
        $(".home-hero_logo").css({
          "max-height": "",
          "margin-top": "",
          "margin-left": ""
        });
      }
    });
    $(document).ready(function() {
      $(".programmation_item").each(function() {
        $(this).css("grid-column", "span " + $(this).children(".column-span-size").text().trim());
        console.log("column span added");
      });
    });
    setTimeout(function() {
      const rr = /* @__PURE__ */ new Set();
      for (const div of document.querySelectorAll(".checkbox-filter")) {
        if (rr.has(div.textContent.trim())) {
          div.parentNode.removeChild(div);
        }
        rr.add(div.textContent.trim());
      }
    }, 0);
    $("body").on("click touchstart", function() {
      const videoElement = document.getElementsByClassName("home-hero_bg-video");
      if (videoElement.playing) {
      } else {
        $(".home-hero_bg-video").trigger("play");
      }
    });
    $(".home-hero_logo").click(function() {
      location.reload();
    });
  }

  // src/utils/swiper.ts
  function loadSwiper() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load swiper script"));
      document.head.appendChild(script);
    });
  }
  function appSwiper() {
    $(".programmation_swiper").each(function(index) {
      const swiper = new Swiper($(this).find(".swiper")[0], {
        direction: "horizontal",
        followFinger: true,
        loop: true,
        centeredSlides: true,
        autoHeight: false,
        freeMode: false,
        slideToClickedSlide: true,
        slidesPerView: "auto",
        spaceBetween: 32,
        slidesPerGroup: 1,
        rewind: true,
        speed: 750,
        // Navigation arrows
        navigation: {
          nextEl: ".programmation_arrow-right",
          prevEl: ".programmation_arrow-left"
        },
        mousewheel: {
          forceToAxis: true,
          sensitivity: 1,
          thresholdDelta: 1
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: "auto",
            spaceBetween: 32
          },
          // tablet
          768: {
            slidesPerView: "auto",
            spaceBetween: 32
          },
          // desktop
          992: {
            slidesPerView: "auto",
            spaceBetween: "12.5%"
          }
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active"
      });
    });
    $(".actualites_swiper").each(function(index) {
      const swiper = new Swiper($(this).find(".swiper")[0], {
        direction: "horizontal",
        followFinger: true,
        loop: true,
        centeredSlides: false,
        autoHeight: false,
        freeMode: false,
        slideToClickedSlide: true,
        slidesPerView: "auto",
        spaceBetween: 32,
        slidesPerGroup: 1,
        rewind: true,
        speed: 750,
        // Navigation arrows
        navigation: {
          nextEl: ".actualites_arrow-right",
          prevEl: ".actualites_arrow-left"
        },
        mousewheel: {
          forceToAxis: true,
          sensitivity: 1,
          thresholdDelta: 1
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: "auto",
            spaceBetween: 32
          },
          // tablet
          768: {
            slidesPerView: "auto",
            spaceBetween: 32
          },
          // desktop
          992: {
            slidesPerView: "auto",
            spaceBetween: "12.5%"
          }
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active"
      });
    });
    $(".actualites_swiper-inner").each(function(index) {
      const swiper = new Swiper($(this).find(".swiper")[0], {
        direction: "horizontal",
        followFinger: true,
        loop: true,
        centeredSlides: false,
        autoHeight: false,
        freeMode: false,
        slideToClickedSlide: false,
        slidesPerView: "auto",
        spaceBetween: 32,
        slidesPerGroup: 1,
        rewind: true,
        speed: 750,
        // Navigation arrows
        navigation: {
          nextEl: ".actualites_arrow-right",
          prevEl: ".actualites_arrow-left"
        },
        mousewheel: {
          forceToAxis: true,
          sensitivity: 1,
          thresholdDelta: 1
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: "auto",
            spaceBetween: 32
          },
          // tablet
          768: {
            slidesPerView: 1,
            spaceBetween: 32
          },
          // desktop
          992: {
            slidesPerView: "auto",
            spaceBetween: 32
          }
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active"
      });
    });
  }

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const name = "Studio Relief dev - 01.06 - Hey";
    greetUser(name);
    clockHero();
    jqueryCC();
    Promise.all([
      loadAttributesScript(
        "https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js"
      ),
      loadAttributesScript(
        "https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js"
      ),
      loadAttributesScript("https://cdn.jsdelivr.net/npm/@finsweet/attributes-modal@1/modal.js"),
      loadAttributesScript(
        "https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js"
      ),
      loadAttributesScript(
        "https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js"
      ),
      loadAttributesScript("https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js")
    ]).then(() => {
      console.log("All Finsweet Attributes scripts loaded");
    }).catch((error) => {
      console.error(error);
    });
    loadSwiper().then(() => {
      console.log("Swiper script loaded successfully");
      appSwiper();
    }).catch((error) => {
      console.error("Error loading Swiper script:", error);
    });
    Promise.all([
      loadAttributesScript(
        "https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js"
      )
    ]).then(() => {
      console.log("All Finsweet Attributes scripts loaded");
    }).catch((error) => {
      console.error(error);
    });
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const yearElement = document.querySelector("#year-chambord");
    yearElement.textContent = currentYear;
    const textMapping = {
      Monday: "Lundi",
      Tuesday: "Mardi",
      Wednesday: "Mercredi",
      Thursday: "Jeudi",
      Friday: "Vendredi",
      Saturday: "Samedi",
      Sunday: "Dimanche",
      January: "Janvier",
      February: "F\xE9vrier",
      March: "Mars",
      April: "Avril",
      May: "Mai",
      June: "Juin",
      July: "Juillet",
      August: "Ao\xFBt",
      September: "Septembre",
      October: "Octobre",
      November: "Novembre",
      December: "D\xE9cembre"
    };
    function translateText(text) {
      return textMapping[text] || "Text not found";
    }
    const textDivs = document.querySelectorAll(".hero-type-2_trad");
    if (textDivs) {
      textDivs.forEach(function(textDiv) {
        const englishText = textDiv.textContent;
        const frenchText = translateText(englishText);
        textDiv.textContent = frenchText;
      });
    }
    window.onload = function() {
      const path = window.location.pathname;
      const page = path.split("/").pop();
      const maxTabletWidth = 768;
      if ((page == "" || page == "index.html") && window.innerWidth <= maxTabletWidth) {
        const homeHeroLogo = document.querySelector(".home-hero_logo");
        const navbarLogoImg = document.querySelector(".navbar_logo-img");
        if (homeHeroLogo)
          homeHeroLogo.style.display = "none";
        if (navbarLogoImg)
          navbarLogoImg.style.display = "block";
      }
    };
  });
})();
//# sourceMappingURL=index.js.map
