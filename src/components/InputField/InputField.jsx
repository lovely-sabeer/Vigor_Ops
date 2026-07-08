import React, { useState } from 'react'
import styles from './InputField.module.css'
function InputField({ type = 'text', value, handleChange, placeholder, label, name, error }) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className={styles.Rb__field}>
			<label>{label}</label>
			{
				type === "password" ? (
					<div className={styles.Rb__passwordWrapper}>
						<input type={showPassword ? "text" : "password"} name={name} value={value} onChange={handleChange} placeholder={placeholder} />
						<span className="material-symbols-outlined" onClick={() => setShowPassword(prev => !prev)}>{showPassword ? "visibility_off" : "visibility"}</span>
					</div>
				) : (
					<input type={type} name={name} value={value} onChange={handleChange} placeholder={placeholder} />
				)
			}
			{error && error[name] !== "" && <span className={styles.Rb__error}>{error[name]}</span>}
		</div>
	)
}

export default InputField;