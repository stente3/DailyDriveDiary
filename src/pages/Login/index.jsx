import React, {useState} from "react";

const Login = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async e => {
		e.preventDefault();

		// Realiza la validación cargando el archivo JSON
		try {
			const response = await fetch("/data.json");
			const data = await response.json();

			const usuarioValido = data.find(
				usuario =>
					usuario.name === userName && usuario.password === password
			);

			if (usuarioValido) {
				alert("Inicio de sesión exitoso");
				// Realiza acciones adicionales, como redirigir al usuario.
			} else {
				alert("Credenciales incorrectas");
			}
		} catch (error) {
			console.error("Error al cargar el archivo JSON:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Nombre de usuario'
				value={userName}
				onChange={e => setUserName(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Contraseña'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button type='submit'>Iniciar sesión</button>
		</form>
	);
};

export {Login};
