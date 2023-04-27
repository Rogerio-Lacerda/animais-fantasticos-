import initOutsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(sobre, dropdown) {
    this.sobre = document.querySelector(sobre);
    this.dropdown = document.querySelector(dropdown);
    this.events = ["click", "touchstart"];
    this.handleClick = this.handleClick.bind(this);
  }

  // Ativa o dropdownMenu e adiciona
  // a função que observa o clique fora dele
  handleClick(event) {
    event.preventDefault();
    this.dropdown.classList.add("ativo");
    initOutsideClick(event.currentTarget, this.events, () => {
      this.dropdown.classList.remove("ativo");
    });
  }

  addDropdownEvent() {
    this.events.forEach(() => {
      this.sobre.addEventListener("click", this.handleClick);
    });
  }

  // Inicia a função
  init() {
    if (this.sobre && this.dropdown) {
      this.addDropdownEvent();
    }
    return this;
  }
}
