function ocultaElementosDoHeader(){document.querySelector("header").classList.add("header--is-hidden")}function exibeElementoDoHeader(){document.querySelector("header").classList.remove("header--is-hidden")}function abreOuFechaResposta(e){e.target.parentNode.classList.toggle("faq__questions__item--is-open")}function removeBUttaoAtivo(){var t=document.querySelectorAll("[data-tab-button]");for(let e=0;e<t.length;e++)t[e].classList.remove("shows__tabs__button--is-active")}function escondeTodasAbas(){var t=document.querySelectorAll("[data-tab-id]");for(let e=0;e<t.length;e++)t[e].classList.remove("shows__list--is-active")}document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll("[data-tab-button]"),o=document.querySelectorAll("[data-faq-question]");const e=document.querySelector(".hero");window.addEventListener("scroll",function(){(e.clientHeight>window.scrollY?ocultaElementosDoHeader:exibeElementoDoHeader)()});for(let e=0;e<t.length;e++)t[e].addEventListener("click",function(e){var t=e.target.dataset.tabButton,t=document.querySelector(`[data-tab-id=${t}]`);escondeTodasAbas(),removeBUttaoAtivo(),t.classList.add("shows__list--is-active"),e.target.classList.add("shows__tabs__button--is-active")});for(let e=0;e<o.length;e++)o[e].addEventListener("click",abreOuFechaResposta)});