import { Provider } from 'react-redux';
import { store } from '../../store';
import { AdvicesButton } from '../../components/AdvicesButton';
import { Board } from '../../components/Board';

export const Home = () => {
	return (
		<>
			<Provider store={store}>
				<AdvicesButton />
				<Board />
			</Provider>
		</>
	);
};
