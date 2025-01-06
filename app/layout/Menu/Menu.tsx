import { getMenu } from '@/api/menu';
import styles from './Menu.module.css';

const Menu = async () => {
    const menu = await getMenu(0);
    console.log(menu);
    console.log(typeof menu);
    console.log('I am Home!!!');
    return (
        <div className={styles.menu}>
            <h2>Menu</h2>
            <ul>
                {JSON.stringify(menu)}
                <li>{menu.length}</li>
            </ul>
        </div>
    )
}

export default Menu;
