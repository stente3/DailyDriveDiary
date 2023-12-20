import { useState, useEffect } from 'react';
import styles from './item.module.css';
import iconDelete from '../../assets/images/icon-cross.svg';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleCompleted } from '../../reducers/todoReducer';
import iconCheck from '../../assets/images/icon-check.svg';

const Item = ({ todo, onDragStart, onDrop, onDragOver }) => {
	const isDarkMode = useSelector(state => state.theme.isDarkMode);
	const dispatch = useDispatch();
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		if (todo.completed === true) {
			setCompleted(true);
		}
	}, []);

	const handleRemoveTodo = () => {
		dispatch(removeTodo(todo.id));
	};

	const handleCompletedTodo = () => {
		dispatch(toggleCompleted(todo.id));
		setCompleted(!completed);
	};

	return (
		<div
			className={`${isDarkMode ? styles.task : styles.taskLightMode}`}
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
			>
				{completed && <img src={iconCheck} alt='Check icon' />}
			</button>

			<p className={completed ? styles.textCompleted : ''}>{todo.text}</p>

			<button onClick={handleRemoveTodo} className={styles.deleteButton}>
				<img className={styles.image} src={iconDelete} alt='Icon' />
			</button>
		</div>
	);
};

export { Item };
