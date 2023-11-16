import styles from './board.module.css';
import { Tasks } from '../Tasks';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Provider } from 'react-redux';
import { store } from '../../store';

export const Board = () => {
	return (
		<Provider store={store}>
			<div className={styles.board}>
				<Header />
				<Tasks />
				<Footer />
			</div>
		</Provider>
	);
};
