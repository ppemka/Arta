const viewer = document.querySelector('#viewer');
document.querySelectorAll('.image-open').forEach(button => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    const enlarged = viewer.querySelector('img');
    enlarged.src = image.src;
    enlarged.alt = image.alt;
    document.querySelector('#viewer-caption').innerHTML = button.closest('figure').querySelector('figcaption').innerHTML;
    viewer.showModal();
  });
});
document.querySelector('#close-viewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', e => { if (e.target === viewer && (e.clientX < viewer.getBoundingClientRect().left || e.clientX > viewer.getBoundingClientRect().right || e.clientY < viewer.getBoundingClientRect().top || e.clientY > viewer.getBoundingClientRect().bottom)) viewer.close(); });
const expand = document.querySelector('#expand');
const questions = [...document.querySelectorAll('.qa details')];
function updateExpand() { const all = questions.every(d => d.open); expand.textContent = all ? 'Sakļaut visas atbildes −' : 'Izvērst visas atbildes +'; expand.setAttribute('aria-expanded', String(all)); }
expand.addEventListener('click', () => {const open = !questions.every(d => d.open); questions.forEach(d => d.open = open); updateExpand();});
questions.forEach(d => d.addEventListener('toggle', updateExpand));
document.querySelector('#print').addEventListener('click', () => window.print());
let printState;
window.addEventListener('beforeprint', () => { printState = questions.map(d => d.open); questions.forEach(d => d.open = true); });
window.addEventListener('afterprint', () => { if(printState) questions.forEach((d,i) => d.open = printState[i]); });
