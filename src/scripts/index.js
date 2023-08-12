// Importações dos módulos
import '../../index.html'
import '../styles/index.css' // Importa o css para inclusão de estilos na pagina
import { toggleDropdown } from '../scripts/dropdownLang.js'; // Importa função para alternar o dropdown de idiomas
import { setActiveLink } from '../scripts/currentSection.js'; // Importa função para definir a seção ativa
import { animeScroll } from '../scripts/animate.js'; // Importa função para animação de scroll
import { darkMode, loadTheme } from '../scripts/switchTheme.js'; // Importa funções relacionadas ao tema escuro
import { activeNavbar } from '../scripts/menuBurguer'; // Importa função para ativar o menu de navegação
import { initSlider } from '../scripts/automaticCorrosel'; // Importa função para inicializar o carrossel automático

// Event listener para o botão de dropdown
const dropdownButton = document.getElementById("dropdown");
dropdownButton.addEventListener('click', () => {
  toggleDropdown(); // Chama a função para alternar o dropdown de idiomas
});

// Event listener para quando o DOM for completamente carregado, define a seção ativa
document.addEventListener('DOMContentLoaded', setActiveLink);

// Event listener para o scroll, define a seção ativa durante o scroll
window.addEventListener('scroll', setActiveLink);

// Event listener para o scroll, realiza animações de scroll
window.addEventListener('scroll', () => {
  animeScroll(); // Chama a função para realizar animações de scroll
});

// Event listener para quando o DOM for completamente carregado, realiza animações de scroll
document.addEventListener('DOMContentLoaded', () => {
  animeScroll(); // Chama a função para realizar animações de scroll
});

// Seleciona o botão de alternar tema
const switchTheme = document.querySelector('#change-theme');

// Carrega o tema do armazenamento local
loadTheme();

// Event listener para a mudança de tema
switchTheme.addEventListener('change', () => {
  darkMode(); // Chama a função para alternar entre os modos claro e escuro

  // Remove o item 'dark' do armazenamento local
  localStorage.removeItem('dark');
  
  // Se o corpo do documento tiver a classe 'dark', define o item 'dark' no armazenamento local
  if(document.body.classList.contains('dark')) {
    localStorage.setItem('dark', 1);
  }
});

// Seleciona o botão de menu de navegação
const button = document.getElementById('toggle');

// Event listener para o botão de menu de navegação
button.addEventListener('click', () => {
  activeNavbar(); // Chama a função para ativar o menu de navegação
});

// Event listener para quando o DOM for completamente carregado, inicializa o carrossel automático
document.addEventListener('DOMContentLoaded', () => {
  initSlider({ startAtIndex: 0, autoPlay: true, timeInterval: 2000 }); // Inicializa o carrossel automático
});
