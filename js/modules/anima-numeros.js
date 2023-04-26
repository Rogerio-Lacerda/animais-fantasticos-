export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind do objeto da classe ao callback
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do dom, com número em em seu texto
  // incrementa a partir  de 0 até o número final
  static incrementarNumero(num) {
    const numero = +num.innerText;
    const incremento = Math.floor(numero / 100);
    let start = 0;
    const animar = setInterval(() => {
      num.innerText = start;
      start += incremento;
      if (start > numero) {
        num.innerText = numero;
        clearInterval(animar);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementar número para
  // cada número selecionado do dom
  animaNumeros() {
    this.numeros.forEach((num) => this.constructor.incrementarNumero(num));
  }

  // função que ocorre quando as mutaçoes ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.animaNumeros();
      this.observer.disconnect();
    }
  }

  // Adiciona o mutation observer
  // para verificar para quando a classe ativo
  // é adicionado ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  // Inicia a função
  init() {
    if (this.numeros.length && this.observerTarget && this.observerClass) {
      this.addMutationObserver();
    }
    return this;
  }
}
