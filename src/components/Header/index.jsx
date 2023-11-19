import { useState } from 'react';
import sunIcon from '../../assets/images/icon-sun.svg';
import moonIcon from '../../assets/images/icon-moon.svg';
import styles from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../reducers/themeReducer';

export const Header = () => {
	const isDarkMode = useSelector(state => state.theme.isDarkMode);
	const dispatch = useDispatch();

	const handleToggle = () => {
		dispatch(toggleTheme());
	};

	return (
		<>
			{isDarkMode ? (
				<header className={styles.header}>
					{/* div para el título e icono */}
					<div className={styles.title}>
						<span className={styles.text}>To do list</span>
						<img
							onClick={handleToggle}
							className={styles.image}
							src={sunIcon}
							alt='Icon'
						/>
					</div>
				</header>
			) : (
				<header className={styles.headerLightMode}>
					{/* div para el título e icono */}
					<div className={styles.title}>
						<span className={styles.text}>To do list</span>
						<img
							onClick={handleToggle}
							className={styles.image}
							src={moonIcon}
							alt='Icon'
						/>
					</div>
				</header>
			)}
		</>
	);
};
