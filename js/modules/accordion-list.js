export default function initAccordionList() {
  const dts = document.querySelectorAll('[data-anime="accordion"] dt');
  function activeAccordionList() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  if (dts.length) {
    dts[0].classList.add("ativo");
    dts[0].nextElementSibling.classList.add("ativo");

    dts.forEach((dt) => {
      dt.addEventListener("click", activeAccordionList);
    });
  }
}
