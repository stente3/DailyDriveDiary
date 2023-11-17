import { ClearCompleted } from '../ClearCompleted';
import { ItemLeft } from '../ItemLeft';
import { States } from '../States';
import styles from './footer.module.css';

export const Footer = ({ filter }) => {
	return (
		<div className={styles.footer}>
			<ItemLeft />
			<States filter={filter} />
			<ClearCompleted />
		</div>
	);
};
