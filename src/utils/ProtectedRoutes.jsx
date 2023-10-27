import { useAuth } from '../context/DataContext';
import { Navigate } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';

export const ProtectedRoute = ({ children }) => {
	const { user } = useAuth();
	const [data] = useLocalStorage('activeLogin', false);
	if (!user && data === false) {
		return <Navigate to='/login' />;
	}
	return children;
};
