export default function initMenuMobile() {
  const btnMenu = document.querySelector('[data-mobile="btn"]');
  const menuContainer = document.querySelector('[data-mobile="menu"]');

  function handleClick(event) {
    event.preventDefault();
    menuContainer.classList.toggle("ativo");
    btnMenu.classList.toggle("ativo");

    outsideClick(menuContainer, ["click", "touchstart"], () => {
      menuContainer.classList.remove("ativo");
      btnMenu.classList.remove("ativo");
    });
  }

  function outsideClick(elemento, eventos, callback) {
    const html = document.documentElement;
    const outside = "data-outside";

    if (!elemento.hasAttribute(outside, "")) {
      elemento.setAttribute(outside, "");
      setTimeout(() => {
        eventos.forEach((evento) => {
          html.addEventListener(evento, handleOutsideClick);
        });
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

  ["click", "touchstart"].forEach((evento) => {
    btnMenu.addEventListener(evento, handleClick);
  });
}
