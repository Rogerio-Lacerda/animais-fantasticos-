export default function initScrollAnimado() {
  const sections = document.querySelectorAll('[data-scroll="animado"]');

  sections[0].classList.add("ativo");
  const alturaTela = window.innerHeight * 0.6;
  function activeScrollAnimado() {
    sections.forEach((item) => {
      const altura = item.getBoundingClientRect().top - alturaTela < 0;
      if (altura) {
        item.classList.add("ativo");
      } else if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });
  }

  window.addEventListener("scroll", activeScrollAnimado);
}
