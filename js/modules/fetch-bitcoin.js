export default function fetchBitcoin(url, target) {
  async function activeBitcoin() {
    try {
      const responseBitcoin = await fetch(url);
      const bitcoinJson = await responseBitcoin.json();
      const btc = document.querySelector(target);
      const valor = (100 / bitcoinJson.BRL.buy).toFixed(4);
      btc.innerHTML = `Doe <span class="btc">${valor}</span> bitcoin para nos ajudar`;
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  activeBitcoin();
}
