import React from 'react';
import styles from './advice.module.css';

export const Advice = ({ e }) => {
	return (
		<div className={styles.advice} key={e.id}>
			<div className={styles.adviceBox}>
				<div className={styles.adviceImage}>
					<img src={e.img} alt='Advice' />
				</div>
				<div className={styles.adviceText}>
					<h2>{e.text}</h2>
				</div>
			</div>
		</div>
	);
};
