import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  const containerAnimais = document.querySelector(target);

  // Preenche cada animal no DOM
  function preencherAnimais(animal) {
    const div = document.createElement("div");
    div.innerHTML = `<h2>${animal.specie}</h2>
    <span data-numero>${animal.quant}</span>`;
    containerAnimais.appendChild(div);
  }

  // Anima os números de cada animal
  function animaisNumeros() {
    const animaNumeros = new AnimaNumeros(
      "[data-numero]",
      ".grid-numeros",
      "ativo"
    );
    animaNumeros.init();
  }

  // Puxa os animais através
  // de um arquivo json
  async function activeFetchAnimais() {
    try {
      // fetch e espera a respostatransforma resposta em json
      const responseAnimais = await fetch(url);
      const animaisJson = await responseAnimais.json();
      // Após a transformação em json, ativa as funçoes
      // para preencher e animar os números
      animaisJson.forEach((animal) => preencherAnimais(animal));
      animaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return activeFetchAnimais();
}
