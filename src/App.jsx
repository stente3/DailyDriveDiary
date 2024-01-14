import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/DataContext';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { ProtectedRoute } from './utils/ProtectedRoutes';

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route index element={<Login />} />
						<Route path='/login' element={<Login />} />
						<Route
							path='/home'
							element={
								<ProtectedRoute>
									<Home />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};
