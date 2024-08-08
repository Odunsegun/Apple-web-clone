const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});

const zoom = document.querySelector('.section-3 img');
const minZoom = 1;
const maxZoom = 2;

addEventListener('scroll', e => {
	const vh = window.innerHeight / 100;
  const scrollTop = document.documentElement.scrollTop;
  const start = 100 * vh;
  const stop = 200 * vh;
  if (scrollTop > start && scrollTop < stop) {
	  const scale = Math.max(2.2 - (scrollTop - start) / 500, 1);
  	zoom.style.transform = `scale(${scale})`
  }
})