'use client';

import { JSX, useContext } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { firstLevelMenu } from '@/helpers';

import cn from 'classnames';
import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const pathname = usePathname();

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

    // const setMenu = (newMenu: MenuItem[]) => {
    //     setMenuState(newMenu);
    // };

    const openSecondLevelMenu = (secondCategory: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        setMenu && setMenu(menu.map((item) => {
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
                {menu.map((m) => {
                    if (m.pages.map((p) => p.alias).includes(pathname.split('/')[2])) {
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
