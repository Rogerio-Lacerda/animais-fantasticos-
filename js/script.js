import AccordionList from "./modules/accordion-list.js";
import TabNavegacao from "./modules/tab-navegacao.js";
import ScrollSuave from "./modules/scroll-suave.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initHorarioSemana from "./modules/horario-semana.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import initScrollAnimado from "./modules/scroll-animado.js";

const tabNav = new TabNavegacao(
  '[data-tab="animais"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const accordionList = new AccordionList('[data-anime="accordion"] dt');
accordionList.init();

const scrollSuave = new ScrollSuave('[data-scroll="suave"] a[href^="#"]');
scrollSuave.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-mapa]");
tooltip.init();

initDropdownMenu();
initMenuMobile();
initHorarioSemana();

fetchAnimais("../../animais.json", ".numeros");

fetchBitcoin("https://blockchain.info/ticker", ".btc-container");

initScrollAnimado();
