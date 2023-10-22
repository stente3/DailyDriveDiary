import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
	return useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
	const [users, setUsers] = useState([]); // Cambiar a un array para almacenar varios usuarios
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		// Simula una solicitud de lectura del archivo data.json.
		fetch('/data.json')
			.then(response => response.json())
			.then(data => {
				setUsers(data); // Almacena los usuarios en el estado
			})
			.catch(error => {
				console.error('Error al cargar datos de usuario', error);
			});
	}, []);

	const loginUser = (username, password) => {
		// Encuentra el usuario en el array que coincide con el nombre de usuario y contraseña
		const user = users.find(
			user => user.name === username && user.password === password,
		);
		if (user) {
			setCurrentUser(user);
			return true;
		}
		return false;
	};

	const logoutUser = () => {
		setCurrentUser(null);
	};

	return (
		<AuthContext.Provider value={{ user: currentUser, loginUser, logoutUser }}>
			{children}
		</AuthContext.Provider>
	);
};
