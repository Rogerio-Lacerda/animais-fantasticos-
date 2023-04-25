export default class Modal {
  constructor(abrir, fechar, container) {
    this.abrir = document.querySelector(abrir);
    this.fechar = document.querySelector(fechar);
    this.container = document.querySelector(container);

    // bind this ao callback
    // para fazer referencia ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.fecharContainer = this.fecharContainer.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.container.classList.toggle("ativo");
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fechar ao modal ao clicar ao lado de fora
  fecharContainer(event) {
    if (event.target === this.container)
      this.container.classList.remove("ativo");
  }

  // adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.abrir.addEventListener("click", this.eventToggleModal);
    this.fechar.addEventListener("click", this.eventToggleModal);
    this.container.addEventListener("click", this.fecharContainer);
  }

  // inicia a função
  init() {
    if (this.abrir && this.fechar && this.container) {
      this.addModalEvent();
    }
    return this;
  }
}
