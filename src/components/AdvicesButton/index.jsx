import { Link } from 'react-router-dom';
import styles from './advicesButton.module.css';

export const AdvicesButton = () => (
	<div className={styles.divButton}>
		<button className={styles.button}>
			<Link to='/advices'>Advices</Link>
		</button>
	</div>
);
