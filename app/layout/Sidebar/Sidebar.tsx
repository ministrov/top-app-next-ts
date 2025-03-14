'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@/app/assets/Icon';
import { Menu } from '../Menu/Menu';
import Searching from '@/app/components/Searching/Searching';
import { AppContextProvider } from '@/context/app.context';
import { SidebarProps } from './Sidebar.props';
import { API } from '@/helpers/api';
import { MenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import cn from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = ({ className, ...props }: SidebarProps) => {
    const [data, setData] = useState<MenuItem[]>();

    useEffect(() => {
        const getMenu = async (firstCategory: number) => {
            const response = await fetch(API.topPage.find, {
                method: 'POST',
                body: JSON.stringify({
                    firstCategory
                }),
                headers: new Headers({ 'content-type': 'application/json' })
            });

            const result = await response.json();
            setData(result);
        }

        getMenu(TopLevelCategory.Courses);
    }, []);

    return (
        <aside className={cn(className, styles.sidebar)} {...props}>
            <Icon.LogoIcon className={styles.logo} />
            <Searching className='search' />
            <AppContextProvider menu={data as MenuItem[]} firstCategory={TopLevelCategory.Courses}>
                <Menu />
            </AppContextProvider>
        </aside>
    )
}