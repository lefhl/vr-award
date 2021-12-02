import { Fancybox } from "@fancyapps/ui";

window.addEventListener("load", initFancy, { once: true });

function initFancy() {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
      display: [
        { id: "zoom", position: "right" },
        { id: "close", position: "right" },
      ],
    },

    Hash: false,

    Image: {
      click: "close",
    },

    Thumbs: false,

    Panzoom: {
      lockAxis: true,
    },
  });
}
