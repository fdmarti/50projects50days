const fill = document.querySelector('.fill') as HTMLElement;
const blocks = document.querySelectorAll('.block');

const removeFill = (event: Event) => {
	const target = event.target as HTMLElement;
};

fill.addEventListener('dragstart', removeFill);