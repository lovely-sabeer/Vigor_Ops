import { useState, useEffect } from 'react';

export default function useChangeTheme() {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			return savedTheme;
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
	});
	function toggleTheme() {
		setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
	}
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);
	useEffect(() => {
		const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (event) => {
			if (!localStorage.getItem("theme")) {
				setTheme(event.matches ? "dark" : "light");
			}
		};
		themeQuery.addEventListener('change', handleChange);
		return () => themeQuery.removeEventListener('change', handleChange);
	}, []);
	return toggleTheme;
}
