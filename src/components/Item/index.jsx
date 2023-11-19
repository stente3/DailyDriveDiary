import { useState } from 'react';
import styles from './item.module.css';
import iconDelete from '../../assets/images/icon-cross.svg';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleCompleted } from '../../reducers/todoReducer';

const Item = ({ id, text, onDragStart, onDrop, onDragOver }) => {
	const isDarkMode = useSelector(state => state.theme.isDarkMode);
	const dispatch = useDispatch();
	const [completed, setCompleted] = useState(false);

	const handleRemoveTodo = () => {
		dispatch(removeTodo(id));
	};

	const handleCompletedTodo = () => {
		dispatch(toggleCompleted(id));
		setCompleted(!completed);
	};

	return (
		<div
			className={`${isDarkMode ? styles.task : styles.taskLightMode} ${
				completed ? styles.completed : ''
			}`}
			draggable='true'
			onDragStart={e => onDragStart(e, id)}
			onDrop={onDrop}
			onDragOver={onDragOver}
		>
			<button
				onClick={handleCompletedTodo}
				className={`${styles.checkContainer} ${
					completed ? styles.checked : ''
				}`}
			></button>

			<p className={completed ? styles.textCompleted : ''}>{text}</p>

			<button onClick={handleRemoveTodo} className={styles.deleteButton}>
				<img className={styles.image} src={iconDelete} alt='Icon' />
			</button>
		</div>
	);
};

export { Item };
