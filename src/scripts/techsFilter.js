// Lista de objetos que contém informações sobre as tecnologias e seus ícones
const skillsList = [
  { techName: 'html', IconClassName: 'fa-brands fa-html5' },
  { techName: 'css', IconClassName: 'fa-brands fa-css3-alt icon-tec' },
  { techName: 'javascript', IconClassName: 'fa-brands fa-square-js icon-tec' },
  { techName: 'typescript', IconClassName: 'devicon-typescript-plain colored' },
  { techName: 'react', IconClassName: 'devicon-react-original colored' }
];

// Função que filtra a lista de tecnologias e retorna o ícone correspondente
export function techsNamesFilter(techName) {
  // Procura na lista de skills a que possui o mesmo nome da tecnologia
  const skill = skillsList.find(skill => skill.techName === techName);
  
  // Se encontrou a skill, retorna o ícone, caso contrário, retorna null
  return skill ? skill.IconClassName : null;
}
