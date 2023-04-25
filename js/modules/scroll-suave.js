export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-scroll="suave"] a[href^="#"]'
  );
  function activeScrollSuave(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const topo = document.querySelector(href).offsetTop;

    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  }
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener("click", activeScrollSuave);
    });
  }
}
