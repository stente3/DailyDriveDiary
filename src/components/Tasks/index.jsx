import { Item } from '../Item';
import { NewTask } from '../NewTask';
import styles from './tasks.module.css';

export const Tasks = ({ todos, onDragStart, onDrop, onDragOver }) => {
  return (
    <div className={styles.tasks}>
      <NewTask />
      <div className={styles.list} onDragOver={onDragOver} onDrop={onDrop}>
        {todos.map((todo, index) => (
          <Item
            key={todo.id}
            todo={todo}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={e => onDrop(e, index)}
          />
        ))}
      </div>
    </div>
  );
};
