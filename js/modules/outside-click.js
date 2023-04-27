export default function initOutsideClick(elemento, eventos, callback) {
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
