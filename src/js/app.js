import lozad from "lozad";
import "../scss/style.scss";

window.onload = function () {
  document.body.classList.remove("transition-lock");

  lozad(".lozad", {
    rootMargin: "40px 0px",
    loaded: function (el) {
      el.classList.add("loaded");
    },
  }).observe();

  lozad(".anim", {
    rootMargin: "40px 0px",
    loaded: function (el) {
      el.classList.add("loaded");
    },
  }).observe();
};
