function szChild() {
	const szChildWrappers = document.querySelectorAll(".sz-child");
	const gap = 8;

	for (const szChildWrapper of szChildWrappers) {
		szChildWrapper.style.position = "relative";
		for (let i = 0; i < szChildWrapper.children.length; i++) {
			const childElem = szChildWrapper.children[i];
			childElem.style.position = "absolute";
			childElem.style.top = 0;
			const childWidth = parseFloat(window.getComputedStyle(childElem).width);
			childElem.style.left = (childWidth + gap) * i + "px";
			const parentHeight = parseFloat(window.getComputedStyle(szChildWrapper).height);
			const parentPadding = parseFloat(window.getComputedStyle(szChildWrapper).paddingTop) + parseFloat(window.getComputedStyle(szChildWrapper).paddingBottom);
			const childHeight = parseFloat(window.getComputedStyle(childElem).height);
			if (childHeight + parentPadding > parentHeight) szChildWrapper.style.height = childHeight + parentPadding + "px";
		}
	}
}

szChild();
