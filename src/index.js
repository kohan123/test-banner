const bannerTemplate = require("./templates/banner.handlebars");
require("./styles/main.scss");
require("./styles/tiny-sliders.scss");

import image1 from "./assets/background.png";
import image2 from "./assets/group2.png";
import image3 from "./assets/bitmap.png";
import image4 from "./assets/Star.png";
import { initSlider } from "./templates/scroll";

document.addEventListener("DOMContentLoaded", function () {
  var div = document.createElement("div");
  div.innerHTML = bannerTemplate({
    image1,
    image2,
    image3,
    image4,
  });
  document.body.appendChild(div);

  initSlider();
});
