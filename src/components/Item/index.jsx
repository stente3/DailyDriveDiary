import styles from './item.module.css';
import iconDelete from '../../assets/images/icon-cross.svg';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleCompleted } from '../../reducers/todoReducer';

const Item = ({ id, text }) => {
	const dispatch = useDispatch();

	const handleRemoveTodo = () => {
		dispatch(removeTodo(id));
	};
	const handleCompletedTodo = () => {
		dispatch(toggleCompleted(id));
	};

	return (
		<div className={styles.task}>
			<button
				onClick={handleCompletedTodo}
				className={styles.checkContainer}
			></button>

			<p>{text}</p>

			<button onClick={handleRemoveTodo} className={styles.deleteButton}>
				<img className={styles.image} src={iconDelete} alt='Icon' />
			</button>
		</div>
	);
	return <p>{text}</p>;
};

export { Item };
