const headerMenu = document.getElementById('header-menu');

const headerBurger = document.getElementById('header-burger');

const bodyElem = document.getElementById('body');

headerBurger.addEventListener('click', () => {
	headerMenu.classList.toggle('active');
	headerBurger.classList.toggle('active');
	bodyElem.classList.toggle('lock');
});
