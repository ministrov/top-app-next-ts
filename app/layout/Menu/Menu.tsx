/* eslint-disable jsx-a11y/role-supports-aria-props */
'use client';

import { JSX, KeyboardEvent, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import { firstLevelMenu } from '@/helpers';
import { MenuProps } from './Menu.props';

import cn from 'classnames';
import styles from './Menu.module.css';

export const Menu = ({ categories = [], firstCategory }: MenuProps): JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItem[]>([...categories]);
    const [announce, setAnnounce] = useState<'closed' | 'opened' | 'undefined'>();
    const shoudReduceMotion = useReducedMotion();
    const pathname = usePathname();

    const setMenu = (newMenu: MenuItem[]) => {
        setMenuState(newMenu);
    };

    const variants = {
        visible: {
            marginBottom: 20,
            transition: shoudReduceMotion ? {} : {
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
            opacity: shoudReduceMotion ? 1 : 0,
            height: 0
        }
    };

    const openSecondLevelMenu = (secondCategory: string) => {
        setMenu(menuState.map((item) => {
            if (item._id.secondCategory === secondCategory) {
                setAnnounce(item.isOpened ? 'closed' : 'opened');
                item.isOpened = !item.isOpened;
            }

            return item;
        }));
    };

    const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
        if (key.code === 'Space' || key.code === 'Enter') {
            key.preventDefault();
            openSecondLevelMenu(secondCategory);
        }
    };

    const buildFirstLevel = () => {
        return (
            <ul className={styles.firstLevelList}>
                {firstLevelMenu.map((m) => (
                    <li key={m.id} aria-expanded={m.id === firstCategory}>
                        <Link href={`/${m.route}`} className={cn(styles.firstLevel, {
                            [styles.firstLevelActive]: m.id === firstCategory
                        })}>
                            {m.icon}
                            <span>{m.name}</span>
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
            <ul className={styles.secondBlock}>
                {categories.map((m) => {
                    if (m.pages?.map((p) => p.alias).includes(pathname.split('/')[2])) {
                        m.isOpened = true;
                    }

                    return (
                        <li key={m._id.secondCategory}>
                            <button
                                className={styles.secondLevel}
                                onClick={() => openSecondLevelMenu(m._id.secondCategory)}
                                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                            >
                                {m._id.secondCategory}
                            </button>
                            <motion.ul
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                className={styles.secondLevelBlock}
                            >
                                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                            </motion.ul>
                        </li>
                    );
                })}
            </ul>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
        return (
            pages.map((page) => (
                <motion.li
                    key={page._id}
                    variants={variantsChildren}
                >
                    <Link
                        href={`/${route}/${page.alias}`}
                        className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${page.alias}` === pathname
                        })}
                        tabIndex={isOpened ? 0 : -1}
                        aria-current={`/${route}/${page.alias}` === pathname ? 'page' : false}
                    >
                        {page.title}
                    </Link>
                </motion.li>
            ))
        );
    };

    return (
        <nav className={styles.menu} role='navigation'>
            {announce && <span role='log' className='visuallyHidden'>{announce ? 'развернуто' : 'свернуто'}</span>}
            {buildFirstLevel()}
        </nav>
    )
}

