const bannerTemplate = require("./templates/banner.handlebars");
require("./styles/main.scss");

document.addEventListener("DOMContentLoaded", function () {
  var div = document.createElement("div");
  div.innerHTML = bannerTemplate({});
  document.body.appendChild(div);
});
