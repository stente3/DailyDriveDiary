import { ClearCompleted } from '../ClearCompleted';
import { ItemLeft } from '../ItemLeft';
import { States } from '../States';
import styles from './footer.module.css'

const Footer = () => (
    <div className={styles.footer}>
      <ItemLeft/>
      <States/>
      <ClearCompleted/> 
    </div>
  );
  
  export {Footer};