import debounce from "./debounce.js";
export default class ScrollAnimado {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.alturaTela = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Pega a distancia de cada item
  // em relação ao scroll do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const altura = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(altura - this.alturaTela),
      };
    });
  }

  // Verifica a distancia em cada objeto
  // em relação ao scrool do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  addAnimaEvent() {
    window.addEventListener("scroll", this.checkDistance);
  }

  // Inicia as funções
  init() {
    if (this.sections) {
      this.getDistance();
      this.checkDistance();
      this.addAnimaEvent();
    }
    return this;
  }

  // Rmove o event de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
