const subVisual = document.querySelector('.subVisual');
const subVisual_h1 = subVisual.querySelector('h1');
const subVisual_span = subVisual.querySelector('span');

setTimeout(() => {
  subVisual_h1.classList.add('on');
  subVisual_span.classList.add('on');
}, 300);

(function btnAddActive() {
  const menuBtn = document.querySelector('.menuBtn');
  const sideMenu = document.querySelector('.sideMenu');
  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    sideMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });
})();
