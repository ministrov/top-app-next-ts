'use client';

import { JSX, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import { MenuProps } from './Menu.props';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { firstLevelMenu } from '@/helpers';

import cn from 'classnames';
import styles from './Menu.module.css';

export const Menu = ({ categories }: MenuProps): JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItem[]>([...categories]);
    const firstCategory = TopLevelCategory.Courses;
    const pathname = usePathname();

    const variants = {
        visible: {
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {}
    };

    const setMenu = (newMenu: MenuItem[]) => {
        setMenuState(newMenu);
    };

    const openSecondLevelMenu = (secondCategory: string) => {
        setMenu(menuState.map((item) => {
            if (item._id.secondCategory === secondCategory) {
                item.isOpened = !item.isOpened;
            }

            return item;
        }));
    };

    const buildFirstLevel = () => {
        return (
            <ul className={styles.firstLevelList}>
                {firstLevelMenu.map((m) => (
                    <li key={m.id}>
                        <Link href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id === firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </Link>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </li>
                ))}
            </ul>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {categories.map((category) => {
                    if (category.pages.map((page) => page.alias).includes(pathname.split('/')[2])) {
                        category.isOpened = true;
                    }

                    return (
                        <div key={category._id.secondCategory}>
                            <div
                                className={styles.secondLevel}
                                onClick={() => openSecondLevelMenu(category._id.secondCategory)}
                            >
                                {category._id.secondCategory}
                            </div>
                            <motion.div
                                layout
                                variants={variants}
                                className={cn(styles.secondLevelBlock)}
                            >
                                {buildThirdLevel(category.pages, menuItem.route)}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map((page) => (
                <Link
                    key={page._id}
                    href={`/${route}/${page.alias}`}
                    className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${page.alias}` === pathname
                    })}
                >
                    {page.title}
                </Link>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}
