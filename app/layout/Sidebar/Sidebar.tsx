import { TopLevelCategory } from '@/interfaces/page.interface';
import { Icon } from '@/app/assets/Icon';
import { Menu } from '../Menu/Menu';
import Searching from '@/app/components/Searching/Searching';
import { getMenu } from '@/api/menu';

import cn from 'classnames';
import styles from './Sidebar.module.css';

type SidebarProps = {
    className: string
}

export const Sidebar = async ({ className, ...props }: SidebarProps) => {
    const menu = await getMenu(TopLevelCategory.Courses);
    return (
        <aside className={cn(className, styles.sidebar)} {...props}>
            <Icon.LogoIcon className={styles.logo} />
            <Searching className='search' />
            <Menu categories={menu} />
        </aside>
    )
}