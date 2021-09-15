import { tns } from "tiny-slider/src/tiny-slider";

export const initSlider = () => {
  const slider = tns({
    container: ".scroll",
    items: 1,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    autoplayTimeout: 5000,
    fixedWidth: 280,
    autoplay: true,
    gutter: 3,
    controls: false,
    autoplayButtonOutput: false,
    center: true,
    preventScrollOnTouch: "force",
  });

  slider.events.on("touchStart", () => {
    setTimeout(() => {
      slider.pause();
    }, 500);
  });
};
