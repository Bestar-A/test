document.addEventListener("DOMContentLoaded", () => {
	const animScrollOpacities = document.querySelectorAll(".anim-trigger-scroll");
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("anim-active");
				} else {
					// Remove this comment if reaction you want
					// entry.target.classList.remove("active");
				}
			});
		},
		{ root: null, rootMargin: "0px", threshold: 0.5 }
	);

	Array.from(animScrollOpacities).forEach((elem) => {
		observer.observe(elem);
	});
});
