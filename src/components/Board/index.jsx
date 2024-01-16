import styles from './board.module.css';
import { Tasks } from '../Tasks';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export const Board = () => {
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

	useEffect(() => {
		setItemLeft(filteredTodos.length);
	}, [filteredTodos]);

	return (
		<div className={styles.board}>
			<Header />
			<Tasks todos={filteredTodos} />
			<Footer filter={handleFilter} todosLength={itemLeft} />
		</div>
	);
};
