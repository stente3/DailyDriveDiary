import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Tasks } from '../Tasks';
import { Footer } from '../Footer';
import { Header } from '../Header';

import styles from './board.module.css';

export const Board = () => {
	const todos = useSelector(state => state.todos.list);
	const [filter, setFilter] = useState('all');

	function filterList() {
		switch (filter) {
			case 'active':
				return todos.filter(e => !e.completed);
			case 'completed':
				return todos.filter(e => e.completed);
			default:
				return todos;
		}
	}

	function handleFilter(filter) {
		setFilter(filter);
	}

	const filteredTodos = filterList();

	return (
		<div className={styles.board}>
			<Header />
			<Tasks todos={filteredTodos} />
			<Footer
				filter={handleFilter}
				todosLength={
					todos.filter(item => {
						return item.completed === false;
					}).length
				}
			/>
		</div>
	);
};
