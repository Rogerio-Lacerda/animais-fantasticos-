export default function initTooltip() {
  const mapa = document.querySelector("[data-mapa]");

  function handleMouseOver() {
    const tooltipBox = criarElemento();
    tooltipBox.style.display = "block";
    mapa.addEventListener("mouseleave", handleMouseLeave);
    handleMouseLeave.tooltipBox = tooltipBox;

    mapa.addEventListener("mousemove", handleMouseMove);
    handleMouseMove.tooltipBox = tooltipBox;
  }

  const handleMouseLeave = {
    tooltipBox: "",
    handleEvent() {
      this.tooltipBox.remove();
      mapa.removeEventListener("mouseleave", handleMouseLeave);
      mapa.removeEventListener("mousemove", handleMouseMove);
    },
  };

  const handleMouseMove = {
    tooltipBox: "",
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY}px`;
      this.tooltipBox.style.left = `${event.pageX}px`;
    },
  };

  mapa.addEventListener("mouseover", handleMouseOver);

  function criarElemento() {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = "Endereço proximo ao estacionamneto";
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  criarElemento();
}
