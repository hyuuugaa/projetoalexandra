'use strict';

const rotinas = [
  { id:'acolhida', emoji:'☀', nome:'Acolhida', sub:'Chegar e criar vínculos', cor:'mint', imagem:'assets/ilustracoes/acolhida.svg', descricao:'A chegada pode ser um momento de escuta, carinho e construção de confiança. O acolhimento respeita os sinais e o tempo de cada bebê para se sentir seguro no ambiente.', observar:'Interações, gestos de comunicação, interesses e aproximação dos espaços.', oportunidades:['Vínculos afetivos','Autonomia em pequenas escolhas','Convivência'] },
  { id:'alimentacao', emoji:'◕', nome:'Alimentação', sub:'Sabores e autonomia', cor:'peach', imagem:'assets/ilustracoes/alimentacao.svg', descricao:'Além do cuidado, as refeições oferecem oportunidades de explorar sabores, cheiros, texturas e de participar gradualmente de gestos de autonomia, sempre com acompanhamento dos adultos.', observar:'Curiosidade pelos alimentos, preferências, sinais de saciedade e tentativas de participação, respeitando a fase alimentar de cada bebê.', oportunidades:['Percepção sensorial','Hábitos de cuidado','Autonomia progressiva'] },
  { id:'higiene', emoji:'✧', nome:'Higiene e cuidado', sub:'Cuidar de si', cor:'sky', imagem:'assets/ilustracoes/higiene.svg', descricao:'As trocas e os momentos de higiene são oportunidades de contato visual, conversa, nomeação de partes do corpo e atenção aos sinais do bebê.', observar:'Gestos de participação, reconhecimento de objetos e comunicação de necessidades.', oportunidades:['Consciência corporal','Linguagem cotidiana','Segurança e bem-estar'] },
  { id:'sensorial', emoji:'✿', nome:'Exploração sensorial', sub:'Tocar e investigar', cor:'lilac', imagem:'assets/ilustracoes/sensorial.svg', descricao:'Materiais seguros, apropriados à idade e com diferentes cores, formatos e texturas convidam os bebês a tocar, segurar e explorar sempre com supervisão.', observar:'Formas de segurar, combinar, empilhar, retirar e colocar objetos.', oportunidades:['Coordenação motora','Curiosidade','Percepção de características'] },
  { id:'movimento', emoji:'↝', nome:'Corpo e movimento', sub:'Movimentar-se brincando', cor:'sky', imagem:'assets/ilustracoes/movimento.svg', descricao:'Brincadeiras motoras adequadas a cada bebê incentivam rolar, sentar, alcançar objetos, engatinhar ou dar os primeiros passos conforme suas possibilidades, com apoio e segurança.', observar:'Movimentos espontâneos, alcance de objetos, tentativas de mudança de posição e exploração do espaço.', oportunidades:['Equilíbrio','Coordenação global','Confiança corporal'] },
  { id:'musica', emoji:'♫', nome:'Música e expressão', sub:'Sons, gestos e ritmos', cor:'sun', imagem:'assets/ilustracoes/musica.svg', descricao:'Cantigas, instrumentos simples e brincadeiras sonoras criam oportunidades para escutar, imitar, expressar emoções e perceber ritmos em interação com o grupo.', observar:'Reações aos sons, gestos espontâneos, exploração de ritmos e tentativas de imitação.', oportunidades:['Expressão','Escuta','Interação social'] },
  { id:'historias', emoji:'✦', nome:'Histórias e linguagem', sub:'Ouvir e imaginar', cor:'mint', imagem:'assets/ilustracoes/historias.svg', descricao:'Livros resistentes e ilustrados, histórias curtas, cantigas e conversas ajudam os bebês a observar imagens, escutar vozes, apontar e comunicar-se por gestos e sons.', observar:'Atenção compartilhada, gestos de apontar, vocalizações e interesse por imagens.', oportunidades:['Linguagem oral','Imaginação','Vínculo e escuta'] },
  { id:'descanso', emoji:'☾', nome:'Descanso', sub:'Pausar e se sentir bem', cor:'lilac', imagem:'assets/ilustracoes/descanso.svg', descricao:'O descanso faz parte do cuidado integral. Um ambiente tranquilo e rotinas sensíveis às necessidades individuais ajudam a proporcionar bem-estar e segurança.', observar:'Sinais de sono, formas de se acalmar e preferências da criança.', oportunidades:['Bem-estar','Previsibilidade','Respeito aos ritmos individuais'] }
];

const vivencias = [
  { id:'imitacao', tipo:'registro', filtros:['registro'], categoriaNome:'Expressão e linguagem', nome:'Imitação como forma de expressão', imagem:'assets/fotos/imitacao.jpg', poster:'assets/qr/imitacao-qr.png', descricao:'A imitação aparece como uma maneira de observar o outro, participar das interações e experimentar novas formas de expressão.', aprendizagens:['Expressão','Interação','Comunicação'], selo:'Foto da turma', nota:'Na imagem ampliada, o cartaz também apresenta QR Code para acesso complementar, quando disponível.' },
  { id:'exploracao', tipo:'registro', filtros:['registro','objetos'], categoriaNome:'Investigação e sentidos', nome:'Movimento e exploração de objetos', imagem:'assets/fotos/exploracao.jpg', poster:'assets/qr/movimento-recipiente-qr.png', descricao:'Tirar, colocar e manipular objetos permite investigar formas, tamanhos e relações espaciais com o corpo em ação.', aprendizagens:['Curiosidade','Coordenação','Percepção espacial'], selo:'Foto da turma', nota:'A versão ampliada traz o cartaz com QR Code usado pela professora.' },
  { id:'movimento', tipo:'registro', filtros:['registro','movimento'], categoriaNome:'Corpo e movimento', nome:'Alegria no pula-pula', imagem:'assets/fotos/movimento.jpg', poster:'assets/registros/movimento.png', descricao:'Brincadeiras corporais ampliam as possibilidades de movimento, interação e descoberta do espaço.', aprendizagens:['Movimento','Equilíbrio','Interação'], selo:'Foto da turma', nota:'Este card destaca um momento de movimento da turma; o QR Code relacionado pode levar a outros registros.' },
  { id:'motricidade-mural', tipo:'mural', filtros:['mural','movimento'], categoriaNome:'Corpo e movimento', nome:'Motricidade', imagem:'assets/miniaturas/motricidade-colagem.webp', poster:'assets/murais/motricidade-colagem.png', descricao:'Mural com diferentes momentos de deslocamento, apoio e experimentação corporal em materiais adequados à faixa etária.', aprendizagens:['Motricidade ampla','Confiança corporal','Exploração do espaço'], selo:'Mural pedagógico', nota:'Este é um mural visual da turma, sem QR Code.' },
  { id:'objetos-argolas', tipo:'mural', filtros:['mural','objetos'], categoriaNome:'Objetos e suas características', nome:'Objetos e suas características', imagem:'assets/miniaturas/objetos-argolas.webp', poster:'assets/murais/objetos-argolas.png', descricao:'As crianças exploram encaixes, argolas e suportes, observando formas, quantidades e possibilidades de manipulação.', aprendizagens:['Coordenação motora fina','Exploração de objetos','Atenção'], selo:'Mural pedagógico', nota:'Este mural reúne fotos da atividade, sem QR Code.' },
  { id:'objetos-bolas', tipo:'mural', filtros:['mural','objetos','movimento'], categoriaNome:'Objetos e suas características', nome:'Objetos e suas características com bolas', imagem:'assets/miniaturas/objetos-bolas.webp', poster:'assets/murais/objetos-bolas.png', descricao:'A turma investiga tamanhos, pesos, texturas e deslocamentos por meio da exploração de bolas grandes.', aprendizagens:['Sensações','Movimento','Descoberta de propriedades'], selo:'Mural pedagógico', nota:'Este mural reúne fotos da atividade, sem QR Code.' },
  { id:'objetos-dupla', tipo:'mural', filtros:['mural','objetos'], categoriaNome:'Objetos e suas características', nome:'Explorando recipientes e objetos', imagem:'assets/miniaturas/objetos-dupla.webp', poster:'assets/murais/objetos-dupla.png', descricao:'Os recipientes e objetos do cotidiano convidam a comparar, segurar, guardar e retirar materiais de diferentes formas.', aprendizagens:['Investigação','Coordenação','Noção espacial'], selo:'Mural pedagógico', nota:'Este mural reúne registros da professora, sem QR Code.' },
  { id:'objetos-propriedades', tipo:'mural', filtros:['mural','objetos'], categoriaNome:'Objetos e suas propriedades', nome:'Objetos e suas propriedades', imagem:'assets/miniaturas/objetos-propriedades.webp', poster:'assets/murais/objetos-propriedades.png', descricao:'Ao manipular brinquedos e materiais variados, as crianças observam cores, tamanhos, usos e possibilidades de ação.', aprendizagens:['Exploração sensorial','Curiosidade','Interação com materiais'], selo:'Mural pedagógico', nota:'Este mural reúne fotos da atividade, sem QR Code.' },
  { id:'objetos-blocos', tipo:'mural', filtros:['mural','objetos'], categoriaNome:'Objetos e suas características', nome:'Construções com blocos', imagem:'assets/miniaturas/objetos-blocos.webp', poster:'assets/murais/objetos-blocos.png', descricao:'Os blocos favorecem manipulação, combinações, observação de formas e interações entre as crianças.', aprendizagens:['Coordenação motora fina','Experimentação','Convivência'], selo:'Mural pedagógico', nota:'Este mural reúne registros da turma, sem QR Code.' }
];

const qrRegistros = [
  { id:'qr-imitacao', categoriaNome:'QR Code', nome:'Imitação como forma de expressão', imagem:'assets/miniaturas/imitacao-qr.webp', poster:'assets/qr/imitacao-qr.png', descricao:'Registro em cartaz da atividade de imitação, usado para compartilhar a experiência com as famílias.', aprendizagens:['Expressão','Comunicação','Interação'], selo:'Cartaz com QR Code', nota:'No celular, toque em “Abrir link do QR”. Para ler o código com outro aparelho, amplie o cartaz.' },
  { id:'qr-movimento-recipiente', categoriaNome:'QR Code', nome:'Tirar e colocar objetos em um recipiente', imagem:'assets/miniaturas/movimento-recipiente-qr.webp', poster:'assets/qr/movimento-recipiente-qr.png', descricao:'Atividade de exploração de objetos, movimento e observação das características dos materiais.', aprendizagens:['Coordenação','Exploração','Noção espacial'], selo:'Cartaz com QR Code', nota:'No celular, toque em “Abrir link do QR”. Para ler o código com outro aparelho, amplie o cartaz.' },
  { id:'qr-cesto', categoriaNome:'QR Code', nome:'Coordenação motora fina', imagem:'assets/miniaturas/coordenacao-cesto-qr.webp', poster:'assets/qr/coordenacao-cesto-qr.png', descricao:'Exploração de preensão, retirada e observação de materiais em um cesto.', aprendizagens:['Preensão','Atenção','Coordenação motora fina'], selo:'Cartaz com QR Code', nota:'No celular, toque em “Abrir link do QR”. Para ler o código com outro aparelho, amplie o cartaz.' },
  { id:'qr-fitas', categoriaNome:'QR Code', nome:'Coordenação motora fina com fitas', imagem:'assets/miniaturas/coordenacao-fitas-qr.webp', poster:'assets/qr/coordenacao-fitas-qr.png', descricao:'As crianças puxam e manipulam elementos, fortalecendo a coordenação e o interesse pela tarefa.', aprendizagens:['Coordenação motora fina','Concentração','Exploração'], selo:'Cartaz com QR Code', nota:'No celular, toque em “Abrir link do QR”. Para ler o código com outro aparelho, amplie o cartaz.' },
  { id:'qr-pinos', categoriaNome:'QR Code', nome:'Coordenação motora fina com pinos', imagem:'assets/miniaturas/coordenacao-pinos-qr.webp', poster:'assets/qr/coordenacao-pinos-qr.png', descricao:'Atividade de encaixe e manipulação que favorece controle dos movimentos e atenção.', aprendizagens:['Encaixe','Coordenação fina','Atenção'], selo:'Cartaz com QR Code', nota:'No celular, toque em “Abrir link do QR”. Para ler o código com outro aparelho, amplie o cartaz.' },
  { id:'qr-parede', categoriaNome:'QR Code', nome:'Coordenação motora fina na parede', imagem:'assets/miniaturas/coordenacao-parede-qr.webp', poster:'assets/qr/coordenacao-parede-qr.png', descricao:'A criança se movimenta e interage com materiais posicionados na parede, ampliando alcance e controle motor.', aprendizagens:['Equilíbrio','Coordenação','Exploração corporal'], selo:'Cartaz com QR Code', nota:'No celular, toque em “Abrir link do QR”. Para ler o código com outro aparelho, amplie o cartaz.' },
  { id:'qr-manipular-livros', categoriaNome:'QR Code', nome:'Manipular livros', imagem:'assets/miniaturas/manipular-livros-qr.webp', poster:'assets/qr/manipular-livros-qr.png', descricao:'Contato com livros e materiais de leitura de forma sensorial e afetiva.', aprendizagens:['Linguagem','Curiosidade','Relação com livros'], selo:'Cartaz com QR Code', nota:'No celular, toque em “Abrir link do QR”. Para ler o código com outro aparelho, amplie o cartaz.' },
  { id:'qr-partes-corpo', categoriaNome:'QR Code', nome:'Partes do corpo', imagem:'assets/miniaturas/partes-corpo-qr.webp', poster:'assets/qr/partes-corpo-qr.png', descricao:'Vivência de reconhecimento do corpo por meio da observação, nomeação e interação.', aprendizagens:['Consciência corporal','Linguagem','Identidade'], selo:'Cartaz com QR Code', nota:'No celular, toque em “Abrir link do QR”. Para ler o código com outro aparelho, amplie o cartaz.' },
  { id:'qr-alimentacao', categoriaNome:'QR Code', nome:'Preensão na alimentação e autonomia', imagem:'assets/miniaturas/autonomia-alimentacao-qr.webp', poster:'assets/qr/autonomia-alimentacao-qr.png', descricao:'Momento que valoriza gestos de autonomia e preensão relacionados à alimentação.', aprendizagens:['Autonomia','Preensão','Cuidados de si'], selo:'Cartaz com QR Code', nota:'No celular, toque em “Abrir link do QR”. Para ler o código com outro aparelho, amplie o cartaz.' },
  { id:'qr-piscina', categoriaNome:'QR Code', nome:'Piscina de bolinha', imagem:'assets/miniaturas/piscina-bolinha-qr.webp', poster:'assets/qr/piscina-bolinha-qr.png', descricao:'Vivência lúdica de exploração sensorial, movimento e interação em grupo.', aprendizagens:['Sensações','Movimento','Socialização'], selo:'Cartaz com QR Code', nota:'No celular, toque em “Abrir link do QR”. Para ler o código com outro aparelho, amplie o cartaz.' }
];

// Endereços lidos dos QR Codes originais. A permissão do destino depende da escola/Google Drive.
const linksQRCode = Object.freeze({
  'qr-imitacao': 'https://drive.google.com/file/d/1G1jMPvKsaCqaSHA7olIdrA_TYB0gGxkW/view?usp=sharing',
  'qr-movimento-recipiente': 'https://www.canvaqr.com/RGQXqck1wb',
  'qr-cesto': 'https://drive.google.com/file/d/16ytJujQwEq3Fje-6sqYAc8bqVXTloGDs/view?usp=sharing',
  'qr-fitas': 'https://drive.google.com/file/d/1Am23_Pwie--MDxPlfzCIoA9yN14RXAp9/view?usp=sharing',
  'qr-pinos': 'https://drive.google.com/file/d/1k3V2yFMxJzhjDJPVPuj4sQM3P-g50CFb/view?usp=sharing',
  'qr-parede': 'https://drive.google.com/file/d/1joykvVrsbh0A4lFDFzzIBVEBtitlw9jr/view?usp=sharing',
  'qr-manipular-livros': 'https://drive.google.com/file/d/1jWkt0lgIv0adqrqqaR18X8tF82VVsaQU/view?usp=sharing',
  'qr-partes-corpo': 'https://drive.google.com/file/d/1ziks4rqnYBCIKAdLObCYw2KnhRKnkuwu/view?usp=sharing',
  'qr-alimentacao': 'https://drive.google.com/file/d/1aSbmPQ-HCdXks24VYE5_MuiogPpH8d2F/view?usp=sharing',
  'qr-piscina': 'https://drive.google.com/file/d/1_WnN-ypR0rBTMSfndhU6h9nkQjaSajl-/view?usp=sharing'
});
for (const registro of qrRegistros) registro.href = linksQRCode[registro.id];
for (const registro of vivencias) {
  if(registro.id === 'imitacao') registro.href = linksQRCode['qr-imitacao'];
  if(registro.id === 'exploracao') registro.href = linksQRCode['qr-movimento-recipiente'];
  if(registro.id === 'movimento') registro.href = 'https://drive.google.com/file/d/1hbLYh3FHzmzlnbpbdA61Sd3S9xXe3CzP/view?usp=sharing';
}

const grid = document.getElementById('routineGrid');
const detail = document.getElementById('routineDetail');
const galleryGrid = document.getElementById('vivenciasGrid');
const qrGrid = document.getElementById('qrGrid');
const dialog = document.getElementById('registroModal');
let registroAtual = 0;
let categoriaAtual = 'todas';
let colecaoAtual = vivencias;
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function mostrarRotina(id, deslocar = false) {
  const item = rotinas.find(r => r.id === id) || rotinas[0];
  [...grid.querySelectorAll('.routine-card')].forEach(btn => {
    const ativo = btn.dataset.routine === item.id;
    btn.classList.toggle('selected', ativo);
    btn.setAttribute('aria-pressed', String(ativo));
    btn.setAttribute('aria-controls','routineDetail');
  });
  detail.innerHTML = `
    <div class="routine-detail-image"><img src="${item.imagem}" alt="Ilustração do momento: ${item.nome}" loading="eager"><span>Imagem ilustrativa</span></div>
    <div class="routine-detail-copy"><div class="eyebrow small"><span aria-hidden="true">✳</span> OLHAR PARA O COTIDIANO</div>
      <h3>${item.nome}</h3><p>${item.descricao}</p>
      <div class="observe"><strong>O que podemos observar?</strong><p>${item.observar}</p></div>
      <div class="opportunities"><strong>Possibilidades de aprendizagem</strong><div>${item.oportunidades.map(tag=>`<span>${tag}</span>`).join('')}</div></div>
    </div>`;
  if (deslocar && window.innerWidth < 750) detail.scrollIntoView({behavior:reducedMotion()?'auto':'smooth',block:'nearest'});
}

function iniciarRotina(){
  grid.innerHTML = rotinas.map((r,i)=>`<button type="button" class="routine-card ${i===0?'selected':''}" data-routine="${r.id}" aria-pressed="${i===0}" aria-controls="routineDetail"><span class="routine-emoji ${r.cor}" aria-hidden="true">${r.emoji}</span><span class="routine-card-title">${r.nome}</span><span class="routine-sub">${r.sub}</span><span class="routine-arrow" aria-hidden="true">↗</span></button>`).join('');
  grid.addEventListener('click',e=>{const btn=e.target.closest('[data-routine]');if(btn)mostrarRotina(btn.dataset.routine,true);});
  mostrarRotina('acolhida');
}

function filtrarVivencias(item){
  if(categoriaAtual === 'todas') return true;
  return item.filtros.includes(categoriaAtual);
}

function desenharGaleria(){
  const selecionadas = vivencias.filter(filtrarVivencias);
  galleryGrid.innerHTML = selecionadas.map(v=>`
   <article class="memory-card ${v.tipo==='mural'?'is-poster':''}">
     <div class="memory-photo"><img src="${v.imagem}" alt="Imagem da vivência: ${v.nome}" loading="lazy" decoding="async"><span>${v.selo}</span></div>
     <div class="memory-body"><span class="memory-category">${v.categoriaNome}</span><h3>${v.nome}</h3><p>${v.descricao}</p>
       <button class="memory-link" type="button" data-record="${v.id}" data-collection="vivencias" aria-label="Explorar vivência: ${v.nome}">Explorar vivência <span aria-hidden="true">↗</span></button>
     </div>
   </article>`).join('');
}

function iniciarGaleria(){
 desenharGaleria();
 document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
   categoriaAtual=btn.dataset.filter;
   document.querySelectorAll('[data-filter]').forEach(el=>{const active=el===btn;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});
   desenharGaleria();
 }));
 galleryGrid.addEventListener('click',e=>{
   const btn=e.target.closest('[data-record]');
   if(btn) abrirRegistro(btn.dataset.record, btn.dataset.collection);
 });
}

function desenharQr(){
  qrGrid.innerHTML = qrRegistros.map(v=>`
    <article class="qr-card">
      <div class="qr-card-image"><img src="${v.imagem}" alt="Prévia do cartaz com QR Code: ${v.nome}" loading="lazy" decoding="async"></div>
      <div class="qr-card-body">
        <span class="memory-category">${v.categoriaNome}</span>
        <h3>${v.nome}</h3>
        <p>${v.descricao}</p>
        <div class="qr-card-actions">
          <button class="memory-link" type="button" data-record="${v.id}" data-collection="qr">Ver cartaz <span aria-hidden="true">↗</span></button>
          ${v.href ? `<a class="qr-direct-link" href="${v.href}" target="_blank" rel="noopener noreferrer" aria-label="Abrir link do QR Code de ${v.nome}">Abrir link do QR ↗</a>` : ''}
        </div>
      </div>
    </article>`).join('');

  qrGrid.addEventListener('click',e=>{
    const btn=e.target.closest('[data-record]');
    if(btn) abrirRegistro(btn.dataset.record, btn.dataset.collection);
  });
}

function obterColecao(nomeColecao){
  return nomeColecao === 'qr' ? qrRegistros : vivencias;
}

function preencherRegistro(){
 const v = colecaoAtual[registroAtual];
 document.getElementById('modalTitulo').textContent = v.nome;
 document.getElementById('modalDescricao').textContent = v.descricao;
 document.getElementById('modalChips').innerHTML = v.aprendizagens.map(x=>`<span>${x}</span>`).join('');
 const im = document.getElementById('modalImagem');
 im.src = v.poster;
 im.alt = v.selo.includes('QR') ? `Cartaz da atividade ${v.nome}, contendo QR Code` : `Registro ampliado da atividade ${v.nome}`;
 document.getElementById('openPoster').href = v.poster;
 const openVideo = document.getElementById('openQrLink');
 if(v.href){openVideo.href=v.href;openVideo.hidden=false;}
 else {openVideo.hidden=true;openVideo.removeAttribute('href');}
 document.getElementById('modalNota').textContent = v.nota || 'Registro ampliado da atividade.';
}

function abrirRegistro(id, nomeColecao = 'vivencias'){
 colecaoAtual = obterColecao(nomeColecao);
 registroAtual = Math.max(0, colecaoAtual.findIndex(v=>v.id===id));
 preencherRegistro();
 if(typeof dialog.showModal==='function') dialog.showModal(); else dialog.setAttribute('open','');
 document.body.classList.add('modal-open');
}

function fecharRegistro(){
  if(typeof dialog.close==='function') dialog.close(); else dialog.removeAttribute('open');
  document.body.classList.remove('modal-open');
}

function navegarRegistro(offset){
  registroAtual = (registroAtual + offset + colecaoAtual.length) % colecaoAtual.length;
  preencherRegistro();
}

function iniciarModal(){
 document.getElementById('modalClose').addEventListener('click',fecharRegistro);
 document.getElementById('prevRecord').addEventListener('click',()=>navegarRegistro(-1));
 document.getElementById('nextRecord').addEventListener('click',()=>navegarRegistro(1));
 dialog.addEventListener('click',e=>{if(e.target===dialog)fecharRegistro();});
 dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
 document.addEventListener('keydown',e=>{
   if(!dialog.open)return;
   if(e.key==='ArrowRight')navegarRegistro(1);
   if(e.key==='ArrowLeft')navegarRegistro(-1);
 });
}

function iniciarNavegacao(){
 const toggle=document.querySelector('.menu-toggle');
 const nav=document.getElementById('primary-nav');
 function fecharMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');nav.classList.remove('is-open');}
 toggle.addEventListener('click',()=>{const aberto=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!aberto));toggle.setAttribute('aria-label',aberto?'Abrir menu':'Fechar menu');nav.classList.toggle('is-open',!aberto);});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',fecharMenu));
 document.addEventListener('keydown',e=>{if(e.key==='Escape') {fecharMenu(); if(document.activeElement && nav.contains(document.activeElement)) toggle.focus();}});
 window.addEventListener('resize',()=>{ if(window.innerWidth>1120) fecharMenu(); },{passive:true});
 document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!toggle.contains(e.target))fecharMenu();});
 const back=document.getElementById('backToTop');
 const onScroll=()=>back.classList.toggle('visible',window.scrollY>700);
 window.addEventListener('scroll',onScroll,{passive:true});
 back.addEventListener('click',()=>window.scrollTo({top:0,behavior:reducedMotion()?'auto':'smooth'}));
 onScroll();
}

document.addEventListener('DOMContentLoaded',()=>{
  iniciarRotina();
  iniciarGaleria();
  desenharQr();
  iniciarModal();
  iniciarNavegacao();
});
