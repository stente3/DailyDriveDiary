import { useState, useEffect } from 'react';

// Un custom hook para interactuar con el localStorage de manera reutilizable.
export function useLocalStorage(key, initialValue) {
	// Inicializa el estado con el valor almacenado en localStorage o el valor inicial proporcionado.
	const [value, setValue] = useState(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : initialValue;
	});

	// Utiliza useEffect para guardar el valor en localStorage cuando cambia.
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	// Función para eliminar el valor del localStorage y restablecerlo al valor inicial.
	const removeValue = () => {
		localStorage.removeItem(key);
		setValue(initialValue);
	};

	return [value, setValue, removeValue];
}
