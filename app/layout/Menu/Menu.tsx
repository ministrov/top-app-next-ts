'use client';

import { JSX, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import { firstLevelMenu } from '@/helpers';
import { MenuProps } from './Menu.props';

import cn from 'classnames';
import styles from './Menu.module.css';

export const Menu = ({ categories = [], firstCategory }: MenuProps): JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItem[]>([...categories]);
    const pathname = usePathname();

    console.log(categories);
    console.log(menuState);

    const setMenu = (newMenu: MenuItem[]) => {
        setMenuState(newMenu);
    };

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: { marginBottom: 0 }
    };

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 'auto'
        },
        hidden: {
            opacity: 0,
            height: 0
        }
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
        if (!Array.isArray(categories)) {
            return null;
        }
        return (
            <div className={styles.secondBlock}>
                {categories.map((m) => {
                    if (m.pages?.map((p) => p.alias).includes(pathname.split('/')[2])) {
                        m.isOpened = true;
                    }

                    return (
                        <div key={m._id.secondCategory}>
                            <div
                                className={styles.secondLevel}
                                onClick={() => openSecondLevelMenu(m._id.secondCategory)}
                            >
                                {m._id.secondCategory}
                            </div>
                            <motion.div
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                className={cn(styles.secondLevelBlock)}
                            >
                                {buildThirdLevel(m.pages, menuItem.route)}
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
                <motion.div
                    key={page._id}
                    variants={variantsChildren}
                >
                    <Link
                        href={`/${route}/${page.alias}`}
                        className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${page.alias}` === pathname
                        })}
                    >
                        {page.title}
                    </Link>
                </motion.div>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}
