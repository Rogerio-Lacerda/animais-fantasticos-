export default class ScrollAnimado {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.alturaTela = window.innerHeight * 0.6;
    this.activeScrollAnimado = this.activeScrollAnimado.bind(this);
  }

  activeScrollAnimado() {
    // this.sections[0].classList.add("ativo");
    this.sections.forEach((item) => {
      const altura = item.getBoundingClientRect().top - this.alturaTela < 0;
      if (altura) {
        item.classList.add("ativo");
      } else if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });
  }

  addAnimaEvent() {
    window.addEventListener("scroll", this.activeScrollAnimado);
  }

  init() {
    if (this.sections) {
      this.activeScrollAnimado(this.sections[0]);
      this.addAnimaEvent();
    }
    return this;
  }
}
