import styles from './board.module.css';
import { Tasks } from '../Tasks';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from 'react';

export const Board = () => {
	const todos = useSelector(state => state.todos.list);
	const [filter, setFilter] = useState('all');
	function filterList() {
		if (filter === 'all') {
			return todos;
		} else if (filter === 'active') {
			return todos.filter(e => e.completed === false);
		} else if (filter === 'completed') {
			return todos.filter(e => e.completed === true);
		}
	}
	function handleFilter(filter) {
		setFilter(filter);
	}
	return (
		<div className={styles.board}>
			<Header />
			<Tasks todos={filterList()} />
			<Footer filter={handleFilter} />
		</div>
	);
};
