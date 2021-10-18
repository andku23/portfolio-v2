export const updateCssVariables = () => {
	document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
	setTimeout(() => {
		document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
	}, 100);
};