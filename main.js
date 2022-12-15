import A11YSlider from "a11y-slider";
const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: false,
  slidesToShow: 3,
  autoplay: true,
  skipBtn: false,
  arrows: false,
  autoplayHoverPause: false,
});

document.getElementById("burger-close").addEventListener("click", () => {
  document.getElementById("burger-menu").style.display = "none";
});

document.getElementById("burger-open").addEventListener("click", () => {
  document.getElementById("burger-menu").style.display = "flex";
});
