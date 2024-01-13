import styles from './header.module.css';

export const Header = () => {
	return (
		<>
			<header className={styles.header}>
				{/* div para el título e icono */}
				<div className={styles.title}>
					<span className={styles.text}>To do list</span>
				</div>
			</header>
		</>
	);
};
