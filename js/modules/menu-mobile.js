import initOutsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(btnMenu, menuContainer) {
    this.btnMenu = document.querySelector(btnMenu);
    this.menuContainer = document.querySelector(menuContainer);
    this.className = "ativo";
    this.events = ["click", "touchstart"];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.menuContainer.classList.toggle(this.className);
    this.btnMenu.classList.toggle(this.className);

    initOutsideClick(this.menuContainer, this.events, () => {
      this.menuContainer.classList.remove(this.className);
      this.btnMenu.classList.remove(this.className);
    });
  }

  addMenuMobileEvent() {
    this.events.forEach((evento) => {
      this.btnMenu.addEventListener(evento, this.handleClick);
    });
  }

  init() {
    if (this.btnMenu && this.menuContainer) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
