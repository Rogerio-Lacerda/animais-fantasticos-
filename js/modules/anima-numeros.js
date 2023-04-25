export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animaNumeros() {
    numeros.forEach((num) => {
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
    });
  }

  const gridNumeros = document.querySelector(".grid-numeros");

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      animaNumeros();
      observer.disconnect();
    }
  }

  observer = new MutationObserver(handleMutation);

  observer.observe(gridNumeros, { attributes: true });
}
