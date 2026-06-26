let navigate = null;

export function SetNavigate(navigateFunction) {
	navigate = navigateFunction;
}

export default function NavigateTo(path, options = {}) {
	if (!navigate) {
		console.error("Navigation has not been initialized.");
		return;
	}
	navigate(path, options);
}