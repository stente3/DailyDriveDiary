import styles from './board.module.css';
import { Tasks } from '../Tasks';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Board = () => {
	return (
		<div className={styles.board}>
			<Header />
			<Tasks />
			<Footer />
		</div>
	);
};
