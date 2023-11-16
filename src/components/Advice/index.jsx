import React from 'react';
import styles from './advice.module.css';

const Advice = ({ img, text }) => {
	return (
		<div className={styles.adviceContainer}>
			<div className={styles.adviceImage}>
				<img src={img} alt='Advice' />
			</div>
			<div className={styles.adviceText}>
				<h2>{text}</h2>
			</div>
		</div>
	);
};

export default Advice;
