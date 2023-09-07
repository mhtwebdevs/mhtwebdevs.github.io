// Put button animation on hold
const button = document.getElementById('main');

const heightScale = window.innerHeight / button.scrollHeight
const widthScale = window.innerWidth / button.scrollWidth

function fillScreen() {
	// Set button onclick to null to avoid goofy
	button.onclick = null;

	// Play animation for button
	button.animate([
		{
			color: "rgba(219, 234, 254, 1)",
			borderRadius: '0.75rem'
		},
		{
			color: "rgba(219, 234, 254, 0)",
			transform: `scaleX(0.1) scaleY(0.01)`,
			borderRadius: '0.375rem',
			filter: 'none',
			offset: 0.6
		},
		{
			color: "rgba(219, 234, 254, 0)",
			borderRadius: '0',
			transform: `scaleX(${widthScale}) scaleY(${heightScale})`
		}
	], 700);
	
	setTimeout(() => {
    // Change body background color to that of the button's
		document.body.style.backgroundColor = 'rgb(37 99 235)'

    // Remove button from DOM
		button.remove();

		// Remove grid background from body
		document.body.style.backgroundImage = 'linear-gradient(rgba(248, 250, 252, .04) .1em, transparent .1em), linear-gradient(90deg, rgba(248, 250, 252, .04) .1em, transparent .1em)';

    // Appear actual content onto screen
    const content = document.getElementById('content')
    content.style.position = 'static'
		content.style.display = 'flex'
    content.style.opacity = '1'
		content.animate([
      {
        opacity: '0'
      },
      {
        opacity: '1'
      }
    ], 500)

		// Set body display to block
		document.body.style.display = 'block';
		document.body.style.height = 'auto';

		// Set countdown timer display
		const cdDiv = document.getElementById('countdown');

		const now = new Date(Date.now());
		const deadline = new Date('September 9, 2023 13:00:00 GMT+07:00');

		const countdown = deadline.getTime() - now.getTime();

		if (countdown < 0) {
			cdDiv.style.opacity = '0'
		} else {
			const minutes = Math.floor(countdown / (60 * 1000)) % 60;
			const hours = Math.floor(countdown / (60 * 60 * 1000)) % 24;
			const days = Math.floor(countdown / (24 * 60 * 60 * 1000));

			const day1 = document.getElementById('day1');
			const day2 = document.getElementById('day2');
			day1.src = `./assets/${Math.floor(days / 10)}.png`;
			day2.src = `./assets/${days % 10}.png`;

			const hour1 = document.getElementById('hour1');
			const hour2 = document.getElementById('hour2');
			hour1.src = `./assets/${Math.floor(hours / 10)}.png`;
			hour2.src = `./assets/${hours % 10}.png`;

			const minute1 = document.getElementById('minute1');
			const minute2 = document.getElementById('minute2');
			minute1.src = `./assets/${Math.floor(minutes / 10)}.png`;
			minute2.src = `./assets/${minutes % 10}.png`;
		}
	}, 700);
}