const image = document.querySelector('.image') as HTMLElement;
const heartIcon = document.querySelector('.heart') as HTMLElement;

image.addEventListener('dblclick', () => {
	heartIcon.style.display = 'block';

	setTimeout(() => {
		heartIcon.style.display = 'none';
	}, 1000);
});
