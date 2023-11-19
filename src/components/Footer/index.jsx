import { useSelector } from 'react-redux';
import { ClearCompleted } from '../ClearCompleted';
import { ItemLeft } from '../ItemLeft';
import { States } from '../States';
import styles from './footer.module.css';

export const Footer = ({ filter, todosLength }) => {
	const isDarkMode = useSelector(state => state.theme.isDarkMode);
	return (
		<div className={isDarkMode ? styles.footer : styles.footerLightMode}>
			<ItemLeft todosLength={todosLength} />
			<States filter={filter} />
			<ClearCompleted />
		</div>
	);
};
