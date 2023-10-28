import styles from './newTask.module.css';

export const NewTask = () => (
	<form className={styles.newTaskForm}>
		{/* form para el input del todo-list */}
		<button className={styles.checkContainer}>
			<div />
		</button>
		<input placeholder='Create a new todo...' type='text' />
	</form>
);
