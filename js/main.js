const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.mobile-menu__link');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('mobile-menu--active');
});

navLinks.forEach(function (item, index) {
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active');
		nav.classList.remove('mobile-menu--active');
	});

	item.addEventListener('keydown', function (event) {
		if (nav.classList.contains('mobile-menu--active') && event.keyCode === 9) {
			if (event.shiftKey) {
				if (index === 0) {
					event.preventDefault();
					navIcon.focus();
				}
			} else {
				if (index === navLinks.length - 1) {
					event.preventDefault();
					navIcon.focus();
				}
			}
		}
	});
});

navIcon.addEventListener('keydown', function (event) {
	if (nav.classList.contains('mobile-menu--active') && event.keyCode === 9) {
		event.preventDefault();
		navLinks[0].focus();
	}
});

document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		navIcon.classList.remove('nav-icon--active');
		nav.classList.remove('mobile-menu--active');
	}
});

AOS.init();
//# sourceMappingURL=main.js.map
