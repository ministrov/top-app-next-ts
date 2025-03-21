'use client';

import { Suspense } from 'react';
import { Icon } from '@/app/assets/Icon';
import { Menu } from '../Menu/Menu';
import Searching from '@/app/components/Searching/Searching';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = ({ menu, firstCategory, className, ...props }: SidebarProps) => {
    return (
        <aside className={cn(className, styles.sidebar)} {...props}>
            <Icon.LogoIcon className={styles.logo} />
            <Suspense>
                <Searching className='search' />
            </Suspense>
            <Menu categories={menu} firstCategory={firstCategory} />
        </aside>
    )
}