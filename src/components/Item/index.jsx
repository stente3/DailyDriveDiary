import styles from './item.module.css';
import iconDelete from '../../assets/images/icon-cross.svg';

const Item = () => (
	<div className={styles.task}>
		<button className={styles.checkContainer}>
			<div />
		</button>
		<p>
			Integer urna interdum massa libero auctor neque turpis turpis semper. Duis
			vel sed fames integer.
		</p>

		<button className={styles.deleteButton}>
			<img className={styles.image} src={iconDelete} alt='Icon' />
		</button>
	</div>
);

export { Item };
