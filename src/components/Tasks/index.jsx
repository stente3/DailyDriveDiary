import { Item } from '../Item';
import { NewTask } from '../NewTask';
import styles from './tasks.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const Tasks = () => {
	const todos = useSelector(state => state.todos.list);
	return (
		<div className={styles.tasks}>
			<NewTask />
			<div className={styles.list}>
				{todos.map(todo => {
					return <Item key={todo.id} id={todo.id} text={todo.text} />;
				})}
			</div>
		</div>
	);
};
