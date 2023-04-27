export default class Funcionamento {
  constructor(data) {
    this.data = document.querySelector(data);
  }

  dadosFuncionamento() {
    this.semana = this.data.dataset.semana.split(",").map((item) => +item);
    this.horas = this.data.dataset.horario.split(",").map((item) => +item);
  }

  dadosAgora() {
    this.dataAtual = new Date();
    this.diaAgora = this.dataAtual.getDay();
    this.horarioAgora = this.dataAtual.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.semana.includes(this.diaAgora);
    const horarioAberto =
      this.horarioAgora >= this.horas[0] && this.horarioAgora < this.horas[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.data.classList.add("aberto");
    } else if (this.data.classList.contains("aberto")) {
      this.data.classList.remove("aberto");
    }
  }

  init() {
    if (this.data) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
