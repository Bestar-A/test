const $ = (elem) => document.querySelectorAll(elem);

const scrollAnimation = () => {
	document.addEventListener("DOMContentLoaded", () => {
		const animScrollOpacities = $(".anim-trigger-scroll");
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
	const sliderLists = $(".slide-list");
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

		setTimeout(slider, 5000);
	};

	document.addEventListener("DOMContentLoaded", slider);
};

const testimonialAnimation = () => {
	const testimonialContents = $(".testimonial-content");
	const testimonialButtons = $(".btn-testimonial");
	let curTestimonial = -1;
	let testimonialTimer = null;

	const updateUI = () => {
		for (let i = 0; i < testimonialButtons.length; i++) {
			if (i == curTestimonial) {
				testimonialButtons[i].classList.add("active");
				testimonialContents[i].style.display = "block";
				setTimeout(() => {
					testimonialContents[i].style.opacity = "1";
					testimonialContents[i].style.transform = "translateY(0px)";
				}, 50);
			} else {
				testimonialButtons[i].classList.remove("active");
				testimonialContents[i].style.display = "none";
				testimonialContents[i].style.opacity = "0";
				testimonialContents[i].style.transform = "translateY(20px)";
			}
		}
	};

	testimonialButtons.forEach((i, k) => {
		i.addEventListener("click", () => {
			curTestimonial = k;
			updateUI();
			clearTimeout(testimonialTimer);
			testimonialTimer = setTimeout(testimonial, 3000);
		});
	});

	console.log(testimonialButtons.length);

	const testimonial = () => {
		curTestimonial = (curTestimonial + 1) % testimonialButtons.length;
		updateUI();
		testimonialTimer = setTimeout(testimonial, 3000);
	};

	document.addEventListener("DOMContentLoaded", testimonial);
};

testimonialAnimation();
sliderAnimation();
scrollAnimation();
