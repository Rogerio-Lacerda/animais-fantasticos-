export default function initHorarioSemana() {
  const data = document.querySelector("[data-semana]");

  const dataAtual = new Date();

  const semana = data.dataset.semana.split(",").map((item) => +item);

  const horas = data.dataset.horario.split(",").map((item) => +item);
  const aberto =
    semana.includes(dataAtual.getDay()) &&
    dataAtual.getHours() >= horas[0] &&
    dataAtual.getHours() < horas[1];

  if (aberto) {
    data.classList.add("aberto");
  } else if (data.classList.contains("aberto")) {
    data.classList.remove("aberto");
  }
}
