let fase = 1;
function proximo(n){
  document.querySelectorAll('.tela').forEach(t=>t.classList.remove('ativa'));
  document.getElementById('t'+n).classList.add('ativa');
  window.scrollTo(0,0);
  if(n>=3 && n<=6){ let p = document.getElementById('barra'); }
  confete();
}
function apagar(){
  let b = document.getElementById('bolo');
  b.innerHTML = '🎂';
  b.classList.add('apagado');
  document.getElementById('msgBolo').innerHTML = '✨ Seu pedido foi enviado pras estrelas! Vai se realizar! ✨';
  document.getElementById('btnBolo').style.display = 'block';
  confete();
}
function responder(el, certa){
  if(certa){
    el.classList.add('certa');
    document.getElementById('feedbackQuiz').innerHTML = 'Acertou! Você me conhece mesmo! 🥰';
    setTimeout(()=>proximo(6),1200);
  } else {
    el.classList.add('errada');
    document.getElementById('feedbackQuiz').innerHTML = 'Ops! Tenta de novo! 😅';
  }
  confete();
}
function revelar(el, texto){
  el.querySelector('p').innerHTML = '<b>'+texto+'</b>';
  el.querySelector('span').innerHTML = '😍';
  confete();
}
function finalizar(){
  let v = document.getElementById('resposta').value;
  if(!v.trim()){ alert('Escreve alguma coisinha! 🥺'); return; }
  document.getElementById('finalMsg').innerHTML = 'Enviado com amor! ❤️';
  fogos();
}
function confete(){
  let cores=['#ff2e7e','#ffcc00','#00d2ff','#6a00ff','#00ff88','#ff8a00'];
  for(let i=0;i<70;i++){
    let c=document.createElement('div'); c.className='confete';
    c.style.left=Math.random()*100+'vw';
    c.style.background=cores[Math.floor(Math.random()*cores.length)];
    document.body.appendChild(c); setTimeout(()=>c.remove(),3200);
  }
}
function fogos(){
  confete();
  for(let i=0;i<12;i++){
    let f=document.createElement('div'); f.className='fogos';
    f.innerHTML=['🎆','🎇','✨','💥'][Math.floor(Math.random()*4)];
    f.style.left=Math.random()*90+'vw'; f.style.top=Math.random()*70+'vh';
    document.body.appendChild(f); setTimeout(()=>f.remove(),1500);
  }
}