export default class AccordionList {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordionList(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((dt) => {
      dt.addEventListener("click", () => {
        this.toggleAccordionList(dt);
      });
    });
  }

  //Iniciar função
  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordionList(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
