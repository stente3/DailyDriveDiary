import styles from './item.module.css'

const Item = () => (
    <div className={styles.task}>
        <button className={styles.checkContainer}>
            <div />
        </button>
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        
    </div>
  );
  
  export {Item};