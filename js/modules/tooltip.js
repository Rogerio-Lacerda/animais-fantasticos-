export default class Tooltip {
  constructor(mapa) {
    this.mapa = document.querySelector(mapa);

    // bind do objeto das classes aos callbacks
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  // cria a tooltipBox e coloca no body
  criarElemento() {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = "Endereço proximo ao estacionamneto";
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
    return tooltipBox;
  }

  // Cria a tooltip e adiciona os eventos
  // de mousemove e mouseleave
  handleMouseOver() {
    this.criarElemento();
    this.tooltipBox.style.display = "block";
    this.mapa.addEventListener("mouseleave", this.handleMouseLeave);
    this.mapa.addEventListener("mousemove", this.handleMouseMove);
  }

  // Remove a tooltip e os eventos
  // de mousemove e mouseleave
  handleMouseLeave() {
    this.tooltipBox.remove();
    this.mapa.removeEventListener("mouseleave", this.handleMouseLeave);
    this.mapa.removeEventListener("mousemove", this.handleMouseMove);
  }

  // Move a tooltip com base em seus estilos
  // de acordo com a posição do mouse
  handleMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX}px`;
    }
  }

  // Adiciona os evntos de mouseover a cada tooltip
  addMouseEvent() {
    this.mapa.addEventListener("mouseover", this.handleMouseOver);
  }

  // inicia a função
  init() {
    if (this.mapa) {
      this.addMouseEvent();
    }
    return this;
  }
}
