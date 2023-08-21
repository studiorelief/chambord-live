"use strict";(()=>{function f(){let o="2023/09/08 16:00";function e(n,t){let s="0"+n;return s.substr(s.length-t)}function r(n){let t=Date.parse(n);return isNaN(t)?Date.parse(n.replace(/-/g,"/").replace(/[a-z]+/gi," ")):t}function i(n){let t=r(n)-Date.parse(new Date),s=Math.floor(t/1e3%60),a=Math.floor(t/1e3/60%60),d=Math.floor(t/(1e3*60*60)%24),p=Math.floor(t/(1e3*60*60*24));return{total:t,days:p,hours:d,minutes:a,seconds:s}}function c(n,t){let s=document.getElementById(n+"-days"),a=document.getElementById(n+"-hours"),d=document.getElementById(n+"-minutes"),p=document.getElementById(n+"-seconds");var y=setInterval(function(){let u=i(t);u.total<=0?clearInterval(y):(s.innerHTML=e(u.days,2),a.innerHTML=e(u.hours,2),d.innerHTML=e(u.minutes,2),p.innerHTML=e(u.seconds,2))},1e3)}c("js-clock",o)}function l(o){return new Promise((e,r)=>{let i=document.createElement("script");i.src=o,i.async=!0,i.onload=()=>e(),i.onerror=()=>r(new Error(`Failed to load script: ${o}`)),document.head.appendChild(i)})}var m=(o=document)=>{var r;let e="Last Published:";for(let i of o.childNodes)if(i.nodeType===Node.COMMENT_NODE&&((r=i.textContent)!=null&&r.includes(e))){let c=i.textContent.trim().split(e)[1];if(c)return new Date(c)}};var w=o=>{let e=m();console.log(`Hello ${o}!`),console.log(`This site was last published on ${e==null?void 0:e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"2-digit"})}.`)};function h(){$(window).scroll(function(){$(this).scrollTop()>200&&$(".navbar_bg-when-scrolled").css("display")==="block"?$(".navbar_bg-when-scrolled").css({transform:"translateY(0rem)"}):$(".navbar_bg-when-scrolled").css({transform:"translateY(-7rem)"})}),$(window).scroll(function(){$(this).scrollTop()>200?$(".home-hero_logo").css({"max-height":"4rem","margin-top":"-1.5rem","margin-left":"-1.5rem"}):$(".home-hero_logo").css({"max-height":"","margin-top":"","margin-left":""})}),$(document).ready(function(){$(".programmation_item").each(function(){$(this).css("grid-column","span "+$(this).children(".column-span-size").text().trim()),console.log("column span added")})}),setTimeout(function(){let o=new Set;for(let e of document.querySelectorAll(".checkbox-filter"))o.has(e.textContent.trim())&&e.parentNode.removeChild(e),o.add(e.textContent.trim())},0),$("body").on("click touchstart",function(){document.getElementsByClassName("home-hero_bg-video").playing||$(".home-hero_bg-video").trigger("play")}),$(".home-hero_logo").click(function(){location.reload()})}function g(){return new Promise((o,e)=>{let r=document.createElement("script");r.type="module",r.src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js",r.onload=()=>o(),r.onerror=()=>e(new Error("Failed to load swiper script")),document.head.appendChild(r)})}function b(){$(".programmation_swiper").each(function(o){let e=new Swiper($(this).find(".swiper")[0],{direction:"horizontal",followFinger:!0,loop:!0,centeredSlides:!0,autoHeight:!1,freeMode:!1,slideToClickedSlide:!0,slidesPerView:"auto",spaceBetween:32,slidesPerGroup:1,rewind:!0,speed:750,navigation:{nextEl:".programmation_arrow-right",prevEl:".programmation_arrow-left"},mousewheel:{forceToAxis:!0,sensitivity:1,thresholdDelta:1},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{480:{slidesPerView:"auto",spaceBetween:32},768:{slidesPerView:"auto",spaceBetween:32},992:{slidesPerView:"auto",spaceBetween:"12.5%"}},slideActiveClass:"is-active",slideDuplicateActiveClass:"is-active"})}),$(".actualites_swiper").each(function(o){let e=new Swiper($(this).find(".swiper")[0],{direction:"horizontal",followFinger:!0,loop:!0,centeredSlides:!1,autoHeight:!1,freeMode:!1,slideToClickedSlide:!0,slidesPerView:"auto",spaceBetween:32,slidesPerGroup:1,rewind:!0,speed:750,navigation:{nextEl:".actualites_arrow-right",prevEl:".actualites_arrow-left"},mousewheel:{forceToAxis:!0,sensitivity:1,thresholdDelta:1},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{480:{slidesPerView:"auto",spaceBetween:32},768:{slidesPerView:"auto",spaceBetween:32},992:{slidesPerView:"auto",spaceBetween:"12.5%"}},slideActiveClass:"is-active",slideDuplicateActiveClass:"is-active"})}),$(".actualites_swiper-inner").each(function(o){let e=new Swiper($(this).find(".swiper")[0],{direction:"horizontal",followFinger:!0,loop:!0,centeredSlides:!1,autoHeight:!1,freeMode:!1,slideToClickedSlide:!1,slidesPerView:"auto",spaceBetween:32,slidesPerGroup:1,rewind:!0,speed:750,navigation:{nextEl:".actualites_arrow-right",prevEl:".actualites_arrow-left"},mousewheel:{forceToAxis:!0,sensitivity:1,thresholdDelta:1},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{480:{slidesPerView:"auto",spaceBetween:32},768:{slidesPerView:1,spaceBetween:32},992:{slidesPerView:"auto",spaceBetween:32}},slideActiveClass:"is-active",slideDuplicateActiveClass:"is-active"})})}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{w("Studio Relief dev - 01.06 - Hey"),f(),h(),Promise.all([l("https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js"),l("https://cdn.jsdelivr.net/npm/@finsweet/attributes-inputactive@1/inputactive.js"),l("https://cdn.jsdelivr.net/npm/@finsweet/attributes-modal@1/modal.js"),l("https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js"),l("https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js"),l("https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js")]).then(()=>{console.log("All Finsweet Attributes scripts loaded")}).catch(t=>{console.error(t)}),g().then(()=>{console.log("Swiper script loaded successfully"),b()}).catch(t=>{console.error("Error loading Swiper script:",t)}),Promise.all([l("https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js")]).then(()=>{console.log("All Finsweet Attributes scripts loaded")}).catch(t=>{console.error(t)});let e=new Date().getFullYear(),r=document.querySelector("#year-chambord");r.textContent=e;let i={Monday:"Lundi",Tuesday:"Mardi",Wednesday:"Mercredi",Thursday:"Jeudi",Friday:"Vendredi",Saturday:"Samedi",Sunday:"Dimanche",January:"Janvier",February:"F\xE9vrier",March:"Mars",April:"Avril",May:"Mai",June:"Juin",July:"Juillet",August:"Ao\xFBt",September:"Septembre",October:"Octobre",November:"Novembre",December:"D\xE9cembre"};function c(t){return i[t]||"Text not found"}let n=document.querySelectorAll(".hero-type-2_trad");n&&n.forEach(function(t){let s=t.textContent,a=c(s);t.textContent=a}),window.onload=function(){let s=window.location.pathname.split("/").pop(),a=768;if((s==""||s=="index.html")&&window.innerWidth<=a){let d=document.querySelector(".home-hero_logo"),p=document.querySelector(".navbar_logo-img");d&&(d.style.display="none"),p&&(p.style.display="block")}}});})();
