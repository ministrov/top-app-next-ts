'use client';

import { Icon } from '@/app/assets/Icon';
import { Menu } from '../Menu/Menu';
import Searching from '@/app/components/Searching/Searching';
import { SidebarProps } from './Sidebar.props';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { AppContextProvider } from '@/context/app.context';
// import { getMenu } from '@/api/menu';
import cn from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = ({ className, ...props }: SidebarProps) => {
    return (
        <aside className={cn(className, styles.sidebar)} {...props}>
            <Icon.LogoIcon className={styles.logo} />
            <Searching className='search' />
            <AppContextProvider menu={[]} firstCategory={TopLevelCategory.Courses}>
                <Menu />
            </AppContextProvider>
        </aside>
    )
}