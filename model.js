let OpenBtn = document.querySelector('.open-btn');
let modalContainer = document.querySelector('#modal-container');
let closBtn = document.querySelector('#close-btn');

OpenBtn.addEventListener('click', function () {
	modalContainer.style.display = 'block';
});

closBtn.addEventListener('click', function () {
	modalContainer.style.display = 'none';
});

window.addEventListener('click', function (e) {
	if (e.target === modalContainer) {
		modalContainer.style.display = 'none';
	}
});
