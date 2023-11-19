import styles from './board.module.css';
import { Tasks } from '../Tasks';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateTodosOrder } from '../../reducers/todoReducer'; // Asegúrate de importar la acción updateTodosOrder

export const Board = () => {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos.list);
	const [filter, setFilter] = useState('all');
	const [itemLeft, setItemLeft] = useState(todos.length);

	function filterList() {
		if (filter === 'all') {
			return todos;
		} else if (filter === 'active') {
			return todos.filter(e => !e.completed);
		} else if (filter === 'completed') {
			return todos.filter(e => e.completed);
		}
	}

	function handleFilter(filter) {
		setFilter(filter);
	}

	const filteredTodos = filterList();

	const handleDragStart = (e, id) => {
		e.dataTransfer.setData('text/plain', id.toString());
	};

	const handleDrop = (e, droppedIndex) => {
		e.preventDefault();
		const droppedTaskId = e.dataTransfer.getData('text/plain');
		const draggedIndex = todos.findIndex(
			todo => todo.id.toString() === droppedTaskId,
		);

		if (draggedIndex === droppedIndex) {
			return; // Si se soltó en la misma posición, no se hace nada
		}

		const updatedTodos = Array.from(todos);
		const [draggedItem] = updatedTodos.splice(draggedIndex, 1);
		updatedTodos.splice(droppedIndex, 0, draggedItem);

		dispatch(updateTodosOrder(updatedTodos));
	};
	useEffect(() => {
		setItemLeft(filteredTodos.length);
	}, [filteredTodos]);

	return (
		<div className={styles.board}>
			<Header />
			<Tasks
				todos={filteredTodos}
				onDragStart={handleDragStart}
				onDrop={handleDrop}
				onDragOver={e => e.preventDefault()}
			/>
			<Footer filter={handleFilter} todosLength={itemLeft} />
		</div>
	);
};
