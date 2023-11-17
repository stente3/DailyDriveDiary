import styles from './states.module.css';

export const States = ({ filter }) => {
	const handleFilter = state => {
		filter(state);
	};
	return (
		<div>
			<button
				onClick={() => handleFilter('all')}
				className={styles.statesButtons}
			>
				All
			</button>
			<button
				onClick={() => handleFilter('active')}
				className={styles.statesButtons}
			>
				Active
			</button>
			<button
				onClick={() => handleFilter('completed')}
				className={styles.statesButtons}
			>
				Completed
			</button>
		</div>
	);
};
