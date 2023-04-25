import initAnimaNumeros from "./anima-numeros.js";
export default function initFetchAnimais() {
  async function activeFetchAnimais() {
    try {
      const responseAnimais = await fetch("./animais.json");
      const animaisJson = await responseAnimais.json();
      const containerAnimais = document.querySelector(".numeros");
      animaisJson.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = `<h2>${item.specie}</h2>
                         <span data-numero>${item.quant}</span>`;

        containerAnimais.appendChild(div);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  activeFetchAnimais();
}
