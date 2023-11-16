import styles from './newTask.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todoReducer';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const NewTask = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');
	const todos = useSelector(state => state.todos.list);

	const handleAddTodo = e => {
		if (text.trim() !== '') {
			dispatch(addTodo(text));
			setText('');
		}
		e.preventDefault();
	};

	return (
		<form onSubmit={handleAddTodo} className={styles.newTaskForm}>
			{/* form para el input del todo-list */}
			<button className={styles.checkContainer}></button>
			<input
				placeholder='Create a new todo...'
				type='text'
				value={text}
				onChange={e => setText(e.target.value)}
			/>
		</form>
	);
};
