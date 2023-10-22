import { Link } from 'react-router-dom';
import styles from './advicesButton.module.css';
const AdvicesButton = () => (
	<div>
		<button className={styles.button}>
			<Link to='/advices'>Advices</Link>
		</button>
	</div>
);

export { AdvicesButton };
