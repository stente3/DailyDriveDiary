import iconUrl from '../../assets/images/icon-sun.svg';
import styles from './header.module.css';

export const Header = () => (
	<header className={styles.header}>
		{/* div para el título e icono */}
		<div className={styles.title}>
			<span className={styles.text}>To do list</span>
			<img className={styles.image} src={iconUrl} alt='Icon' />
		</div>
	</header>
);
