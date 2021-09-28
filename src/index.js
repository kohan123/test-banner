const bannerTemplate = require("./templates/banner.handlebars");
require("./styles/main.scss");
require("./styles/tiny-sliders.scss");

import image1 from "./assets/background.png";
import image2 from "./assets/group2.png";
import image3 from "./assets/bitmap.png";
import image4 from "./assets/Star.png";
import image5 from "./assets/bottom.png";
import image6 from "./assets/top.png";
import image7 from "./assets/group6.png";
import image8 from "./assets/group6medium.png";
import image9 from "./assets/top2.png";
import image10 from "./assets/bottom2.png";
import image11 from "./assets/rectangle24.png";
import { initSlider } from "./templates/scroll";
import { registerClicks } from "./scripts/price";

document.addEventListener("DOMContentLoaded", function () {
  var div = document.createElement("div");
  div.innerHTML = bannerTemplate({
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  });
  document.body.appendChild(div);

  initSlider();
  registerClicks();
});
