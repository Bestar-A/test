const scrollAnimation = () => {
	document.addEventListener("DOMContentLoaded", () => {
		const animScrollOpacities = document.querySelectorAll(".anim-trigger-scroll");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("anim-active");
					} else {
					}
				});
			},
			{ root: null, rootMargin: "0px", threshold: 0.5 }
		);

		Array.from(animScrollOpacities).forEach((elem) => {
			observer.observe(elem);
		});
	});
};

const sliderAnimation = () => {
	const sliderLists = document.querySelectorAll(".slide-list");
	let curSlider = 0;

	const slider = () => {
		for (const sliderList of sliderLists) {
			const firstChild = sliderList.firstElementChild;
			if (firstChild) {
				const childWidth = parseFloat(window.getComputedStyle(firstChild).width);
				const sliderAmount = childWidth + 8;

				sliderList.style.transform = `translateX(-${sliderAmount * curSlider}px)`;
			}
			curSlider = (curSlider + 1) % (sliderList.children.length - 1);
		}
		console.log(curSlider);

		setTimeout(slider, 5000);
	};

	document.addEventListener("DOMContentLoaded", slider);
};

sliderAnimation();
scrollAnimation();
