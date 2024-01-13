import styles from './newTask.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todoReducer';

export const NewTask = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');

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
			<button type='button' className={styles.checkContainer} />
			<input
				placeholder='Create a new todo...'
				type='text'
				value={text}
				className={styles.form}
				onChange={e => setText(e.target.value)}
			/>
		</form>
	);
};
