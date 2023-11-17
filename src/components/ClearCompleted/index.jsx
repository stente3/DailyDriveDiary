import styles from './clearcompleted.module.css';
import { useDispatch } from 'react-redux';
import { removeCompletedTodos } from '../../reducers/todoReducer';

export const ClearCompleted = () => {
	const dispatch = useDispatch();
	function handleRemoveCompletedTodos() {
		dispatch(removeCompletedTodos());
	}
	return (
		<div>
			<button
				onClick={handleRemoveCompletedTodos}
				className={styles.clearButton}
			>
				Clear Completed
			</button>
		</div>
	);
};
