const telaInicial = document.getElementById('tela_inicial');
const nome = document.getElementById('nome');
const botaoEntrar = document.getElementById('entrar');
const telaFormulario = document.getElementById('tela_formulario');
const tituloNome = document.getElementById('titulo_nome');
const motivo = document.getElementById('motivo');
const botaoEnviar = document.getElementById('salvar');
const semanaHistorico = document.getElementById('historico_semanal');
let diaAtual = new Date().getDay();
const emojiMap = {
  feliz: "😄",
  normal: "😐",
  triste: "😔",
  zangado: "😡",
  cansado: "😴"
};
const emojiContador = {
  feliz: 0,
  normal: 0,
  triste: 0,
  zangado: 0,
  cansado: 0
};
const elementosContagem = {
  feliz: document.querySelector('.qnt_emoji li:nth-child(1) span'),
  normal: document.querySelector('.qnt_emoji li:nth-child(2) span'),
  triste: document.querySelector('.qnt_emoji li:nth-child(3) span'),
  zangado: document.querySelector('.qnt_emoji li:nth-child(4) span'),
  cansado: document.querySelector('.qnt_emoji li:nth-child(5) span')
};

botaoEntrar.addEventListener('click', entrar);
function entrar(){
  const nomeUsuario = nome.value.trim();
  if (nomeUsuario == '') {
    alert("Digite o seu nome!")
    return
  }
  telaInicial.classList.add('esconderTela');
  telaFormulario.classList.remove('esconderTela');
  tituloNome.textContent = `Diário de humor do(a) ${nomeUsuario}`
}

botaoEnviar.addEventListener('click', salvar);
function salvar(){
  const motivoUsuario = motivo.value.trim();
  let li = document.createElement('li');
  li.setAttribute('class', 'liSemana');
  const emojiSelecionado = document.querySelector('input[name="emoji"]:checked');
  const emojiTexto = emojiMap[emojiSelecionado.value];


  if (diaAtual == 0) {
    li.textContent = `dom:${emojiTexto} - ${motivoUsuario}`;
  } else if(diaAtual == 1) {
    li.textContent = `seg:${emojiTexto} - ${motivoUsuario}`;
  } else if(diaAtual == 2) {
    li.textContent = `ter:${emojiTexto} - ${motivoUsuario}`;
  } else if(diaAtual == 3) {
    li.textContent = `qua:${emojiTexto} - ${motivoUsuario}`;
  } else if(diaAtual == 4) {
    li.textContent = `qui:${emojiTexto} - ${motivoUsuario}`;
  } else if(diaAtual == 5) {
    li.textContent = `sex:${emojiTexto} - ${motivoUsuario}`;
  } else if(diaAtual == 6) {
    li.textContent = `sáb:${emojiTexto} - ${motivoUsuario}`;
  }
  semanaHistorico.appendChild(li); 
  emojiContador[emojiSelecionado.value]++;
  elementosContagem[emojiSelecionado.value].textContent = `${emojiContador[emojiSelecionado.value]}x`;

}

