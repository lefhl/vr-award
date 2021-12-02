import lozad from "lozad";
import "../scss/style.scss";

window.onload = function () {
  lozad(".lozad", {
    rootMargin: "40px 0px",
    loaded: function (el) {
      el.classList.add("loaded");
    },
  }).observe();
};
