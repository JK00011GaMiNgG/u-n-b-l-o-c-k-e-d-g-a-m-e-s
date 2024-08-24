function createStars(numStars) {
	const background = document.getElementById('background');
	for (let i = 0; i < numStars; i++) {
		const star = document.createElement('div');
		star.className = 'star';
		const size = Math.random() * 3 + 1 + 'px';
		star.style.width = size;
		star.style.height = size;
		star.style.top = Math.random() * 100 + '%';
		star.style.left = Math.random() * 100 + '%';
		background.appendChild(star);
	}
}

document.addEventListener('mousemove', (event) => {
	const x = event.clientX / window.innerWidth;
	const y = event.clientY / window.innerHeight;
	document.querySelectorAll('.star').forEach(star => {
		star.style.transform = `translate(-${x * 25}px, -${y * 25}px)`;
	});
});

createStars(150);

function changePage(page) {
	window.location.href = page;
}

function changeURL(url) {
	window.location.href = url;
}