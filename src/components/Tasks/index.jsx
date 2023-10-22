import { Item } from '../Item';
import styles from './tasks.module.css';

const Tasks = () => (
	<section className={styles.tasks}>
		<div className={styles.list}>
			<Item />
		</div>
	</section>
);

export { Tasks };
