import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/DataContext.jsx';

const Login = () => {
	const { loginUser } = useAuth();
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	let navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		if (loginUser(userName, password)) {
			navigate('/home');
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

export { Login };
