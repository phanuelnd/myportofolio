const menusOnLeft = document.querySelector("side-nav");
window.addEventListener ("scroll", function() {
	menusOnLeft.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.side-title');
// let topNav = document.querySelector('.top-nav');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
// topNav.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
// topNav.classList.remove('open');
};