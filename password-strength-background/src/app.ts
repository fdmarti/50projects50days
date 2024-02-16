const backgroundImage = document.querySelector(
	'.background-image',
) as HTMLElement;
const inputPassword = document.getElementById('password');
const MAX_BLUR = 10;

inputPassword!.addEventListener('keyup', (event) => {
	const target = event.target as HTMLInputElement;
	const lengthValue: number = target.value.length;

	backgroundImage!.style.filter = `blur(${MAX_BLUR - lengthValue}px)`;
});
