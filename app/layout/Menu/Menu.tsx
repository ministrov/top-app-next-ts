import { getMenu } from '@/api/menu';
import styles from './Menu.module.css';

const Menu = async () => {
    const menu = await getMenu(0);
    console.log(menu);
    console.log(Array.isArray(menu));
    console.log('I am Home!!!');
    return (
        <div className={styles.menu}>
            <h2>Menu</h2>
            <ul>
                {menu.map(m => (<li key={m.id?.secondaryCategory}>{m.id?.secondaryCategory}</li>))}
            </ul>
        </div>
    )
}

export default Menu;
