let buttLogin = document.querySelector(".login");
let buttLogPopup = document.querySelector(".login-popup");
buttLogin.addEventListener("click", showPupUp);
function showPupUp(event) {
	event.preventDefault();
	buttLogPopup.classList.toggle("show-popup")
};







// const popupButton = document.querySelector ('.poopup--menu-button');
// const popupWrapper = document.querySelector ('.poopup--menu');
// const popupMenu = document.querySelector ('.poopup--menu-list');

// popupButton.addEventListener ('click', handleMenu);

// function handleMenu() {
// 	popupMenu.classList.toggle('hide-poopup');
// }

// document.addEventListener ('click', hidePopup);
// function hidePopup(el) {
// 	let targetInside = popupWrapper.contains(el.target);
// 	if(!targetInside) {
// 		popupMenu.classList.add('hide-poopup');
// 	}
// 	else {
// 		return;
// 	}
// }