import { Item } from '../Item';
import { NewTask } from '../NewTask';
import styles from './tasks.module.css';

const Tasks = () => (
	<div className={styles.tasks}>
		<NewTask />
		<div className={styles.list}>
			<Item />
		</div>
	</div>
);

export { Tasks };
