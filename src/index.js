const bannerTemplate = require("./templates/banner.handlebars");
require("./styles/main.scss");
const image1 = require("./assets/background.png");
const image2 = require("./assets/group2.png");

document.addEventListener("DOMContentLoaded", function () {
  var div = document.createElement("div");
  div.innerHTML = bannerTemplate({
    logoImg: image1,
    close: image2,
  });
  document.body.appendChild(div);
});
