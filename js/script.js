import AccordionList from "./modules/accordion-list.js";
import TabNavegacao from "./modules/tab-navegacao.js";
import ScrollSuave from "./modules/scroll-suave.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import ScrollAnimado from "./modules/scroll-animado.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

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

const scrollAnimado = new ScrollAnimado('[data-scroll="animado"]');
scrollAnimado.init();

const dropdownMenu = new DropdownMenu(
  '[data-anime="sobre"]',
  '[data-anime="dropdown"]'
);
dropdownMenu.init();

const menuMobile = new MenuMobile(
  '[data-mobile="btn"]',
  '[data-mobile="menu"]'
);
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();

fetchAnimais("./animais.json", ".numeros");

fetchBitcoin("https://blockchain.info/ticker", ".btc-container");
