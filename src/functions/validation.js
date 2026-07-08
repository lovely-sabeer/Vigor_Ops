
export const signUpValidation = ({ form, setError }) => {
	const emptyError = {
		ownerName: "",
		phone: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	const phoneRegex = /^[6-9]\d{9}$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!form.ownerName.trim()) {
		setError({ ...emptyError, ownerName: "Owner name is required." });
		return true;
	}

	if (!form.phone.trim()) {
		setError({ ...emptyError, phone: "Phone number is required." });
		return true;
	}

	if (!phoneRegex.test(form.phone)) {
		setError({ ...emptyError, phone: "Enter a valid 10-digit phone number." });
		return true;
	}

	if (!form.email.trim()) {
		setError({ ...emptyError, email: "Email is required." });
		return true;
	}

	if (!emailRegex.test(form.email)) {
		setError({ ...emptyError, email: "Enter a valid email address." });
		return true;
	}

	if (!form.password) {
		setError({ ...emptyError, password: "Password is required." });
		return true;
	}

	if (form.password.length < 8) {
		setError({ ...emptyError, password: "Password must be at least 8 characters long." });
		return true;
	}

	if (!/[A-Z]/.test(form.password)) {
		setError({ ...emptyError, password: "Password must contain at least one uppercase letter." });
		return true;
	}

	if (!/[a-z]/.test(form.password)) {
		setError({ ...emptyError, password: "Password must contain at least one lowercase letter." });
		return true;
	}

	if (!/\d/.test(form.password)) {
		setError({ ...emptyError, password: "Password must contain at least one number." });
		return true;
	}

	if (!/[!@#$%^&*(),.?":{}|<>]/.test(form.password)) {
		setError({ ...emptyError, password: "Password must contain at least one special character." });
		return true;
	}

	if (!form.confirmPassword) {
		setError({ ...emptyError, confirmPassword: "Confirm password is required." });
		return true;
	}

	if (form.password !== form.confirmPassword) {
		setError({ ...emptyError, confirmPassword: "Passwords do not match." });
		return true;
	}

	setError(emptyError);
	return false;
};

const emptyError = {
	email: "",
	password: "",
};

export const loginValidation = ({ form, setError }) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!form.email.trim()) {
		setError({ ...emptyError, email: "Email is required." });
		return true;
	}

	if (!emailRegex.test(form.email)) {
		setError({ ...emptyError, email: "Enter a valid email address." });
		return true;
	}

	if (!form.password) {
		setError({ ...emptyError, password: "Password is required." });
		return true;
	}

	setError(emptyError);
	return false;
};