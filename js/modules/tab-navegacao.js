export default function initTabNavegacao() {
  const tabAnimais = document.querySelectorAll('[data-tab="animais"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTabNavegacao(index) {
    tabContent.forEach((item) => {
      if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
        item.classList.remove(item.dataset.anime);
      }
    });
    tabContent[index].classList.add(tabContent[index].dataset.anime);
    tabContent[index].classList.add("ativo");
  }
  if (tabAnimais.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    tabAnimais.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTabNavegacao(index);
      });
    });
  }
}
