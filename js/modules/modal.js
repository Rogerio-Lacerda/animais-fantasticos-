export default function initModal() {
  const abrir = document.querySelector('[data-modal="abrir"]');
  const fechar = document.querySelector('[data-modal="fechar"]');
  const container = document.querySelector('[data-modal="container"]');
  function abrirModal(event) {
    event.preventDefault();
    container.classList.toggle("ativo");
  }

  function fecharContainer(event) {
    if (event.target === this) container.classList.remove("ativo");
  }

  abrir.addEventListener("click", abrirModal);
  fechar.addEventListener("click", abrirModal);
  container.addEventListener("click", fecharContainer);
}
