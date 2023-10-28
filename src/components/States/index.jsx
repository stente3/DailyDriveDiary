import styles from './states.module.css';

export const States = () => (
	<div>
		<button className={styles.statesButtons}>All</button>
		<button className={styles.statesButtons}>Active</button>
		<button className={styles.statesButtons}>Completed</button>
	</div>
);
