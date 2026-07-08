import { useState } from "react";
import { login } from "../../config/api";
import NavigateTo from "../../functions/NavigateTo";
import styles from "./Login.module.css";
import GlassCard from "../../components/GlassCard/GlassCard";
import InputField from "../../components/InputField/InputField";
import { loginValidation } from "../../functions/validation";

export default function Login() {
	const [form, setForm] = useState({ email: "", password: "" });
	const [error, setError] = useState({ email: "", password: "" });
	const [loading, setLoading] = useState(false);
	const handleChange = e => {
		setForm(p => ({ ...p, [e.target.name]: e.target.value }));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationError = loginValidation({ form, setError });
		if (validationError) return;
		try {
			setLoading(true);
			const res = await login(form);
			localStorage.setItem("token", res?.token || "token");
			NavigateTo("/app");
		} catch (err) { console.error(err); }
		finally { setLoading(false); }
	};

	return (
		<div className={styles.Lg__container}>
			<main className={styles.Lg__main}>
				<section className={styles.Lg__logoSection}>
					<div className={styles.Lg__logoBox}><span className="material-symbols-outlined">fitness_center</span></div>
					<h1>GymManager</h1>
					<p>ADMINISTRATION PORTAL</p>
				</section>
				<form className={styles.Lg__form} onSubmit={handleSubmit}>
					<GlassCard>
						<InputField type="email" label={"Email"} placeholder={"gymmanager@gmail.com"} handleChange={handleChange} name={"email"} handleChange={handleChange} error={error}/>
						<InputField type="password" label={"Password"} placeholder={"@Gym1234"} handleChange={handleChange} name={"password"} handleChange={handleChange} error={error}/>
					</GlassCard>
					<button type="submit" className={styles.Lg__loginButton} disabled={loading}>{loading ? "Logging In..." : "Login"}</button>
				</form>

				<section className={styles.Lg__registerSection}>
					<p>Don't have an account?<span onClick={() => NavigateTo("/signup")}>Register</span></p>
				</section>
			</main>
		</div>
	);
}