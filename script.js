"use strict";

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/66eeee7de5982d6c7bb262b8/1i8al77mu";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

const nav = document.querySelector(".nav-menu");
const menu = document.querySelector(".phone-navbar");
const closenav = document.querySelector(".close-menu");

nav.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  closenav.classList.toggle("hidden");
});

closenav.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  closenav.classList.toggle("hidden");
  nav.classList.toggle("hidden");
});
