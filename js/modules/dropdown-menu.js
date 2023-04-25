export default function initDropdownMenu() {
  const sobre = document.querySelector('[data-anime="sobre"]');
  const dropdown = document.querySelector('[data-anime="dropdown"]');
  function handleClick(event) {
    event.preventDefault();
    dropdown.classList.add("ativo");

    outsideClick(this, ["click", "touchstart"], () => {
      dropdown.classList.remove("ativo");
    });
  }
  function outsideClick(elemento, eventos, callback) {
    const html = document.documentElement;
    const outside = "data-outside";

    if (!elemento.hasAttribute(outside, "")) {
      elemento.setAttribute(outside, "");
      eventos.forEach((evento) => {
        html.addEventListener(evento, handleOutsideClick);
      });
    }

    function handleOutsideClick(event) {
      if (!elemento.contains(event.target)) {
        elemento.removeAttribute(outside, "");
        eventos.forEach((evento) => {
          html.removeEventListener(evento, handleOutsideClick);
        });
        callback();
      }
    }
  }

  ["click", "touchstart"].forEach(() => {
    sobre.addEventListener("click", handleClick);
  });
}
