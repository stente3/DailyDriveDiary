import iconUrl from '../../assets/images/icon-sun.svg';
import styles from './header.module.css';

const Header = () => (
	<header className={styles.header}>
		{/* div para el título e icono */}
		<div className={styles.title}>
			<span className={styles.text}>Todo list</span>
			<img className={styles.image} src={iconUrl} alt='Icon' />
		</div>
		{/* form para el input del todo-list */}
		<form className={styles.newTaskForm}>
			<button className={styles.checkContainer}>
				<div />
			</button>
			<input placeholder='Create a new todo...' type='text' />
		</form>
	</header>
);

export { Header };
