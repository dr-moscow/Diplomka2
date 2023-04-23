const popuButton = document.querySelector ('poopup--menu-button');
const popupWrapper = document.querySelector ('poopup--menu')
const popupMenu = document.querySelector ('poopup--menu-list');

popuButton.addEventListener ('click', handleMenu);

function handleMenu() {
	popupMenu.classList.toggle('hide-poopup');
}

document.addEventListener ('click', hidePopup);
function hidePopup (el) {
	let targetInside = popupWrapper.contains(el.target);
	if(!targetInside) {
		popupMenu.classList.add('hide-poopup');
	}
	else {
		return;
	}
}