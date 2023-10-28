import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/DataContext.jsx';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export function Login() {
	let navigate = useNavigate();

	const { loginUser } = useAuth();
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState(false);

	// Determina si el usuario ingresó los datos correctos y guia al usuario
	const handleSubmit = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		if (!loginUser(userName, password)) {
			setLoginError(true);
		} else {
			setLoginError(false);
			// Directiona al usuario a la página "home"
			navigate('/home');
		}
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 15,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin='normal'
							required
							fullWidth
							id='username'
							label='Username'
							name='username'
							autoComplete='username'
							autoFocus
							error={loginError}
							onChange={e => setUserName(e.target.value)}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							error={loginError}
							onChange={e => setPassword(e.target.value)}
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
