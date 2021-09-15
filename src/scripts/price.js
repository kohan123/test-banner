export const registerClicks = () => {
   document.querySelector(".btn").addEventListener("click", () => {
      const selectedPriceElement = document.querySelector(".price.selected");
      if (selectedPriceElement) {
        window.open(selectedPriceElement.dataset.link, "_blank")
      }
   }) 
  document.querySelector(".prices").addEventListener("click", (event) => {
    const priceElement = event.target.closest(".price");
    document.querySelectorAll(".price").forEach((element) => {
        element.classList.remove("selected")
    });
    priceElement.classList.add("selected");
  });
};
