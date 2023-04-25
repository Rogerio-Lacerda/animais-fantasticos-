export default class TabNavegacao {
  constructor(menu, content) {
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  // Atiav a tab de acordo com a index da mesma
  activeTabNavegacao(index) {
    this.content.forEach((item) => {
      if (item.classList.contains(this.activeClass)) {
        item.classList.remove(this.activeClass);
        item.classList.remove(item.dataset.anime);
      }
    });
    this.content[index].classList.add(this.content[index].dataset.anime);
    this.content[index].classList.add(this.activeClass);
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.menu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTabNavegacao(index));
    });
  }

  // Inicia funçao
  init() {
    if (this.menu && this.content) {
      // ativa o primeiro item
      this.activeTabNavegacao(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
