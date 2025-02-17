'use client';

import { JSX, useContext } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
// import { MenuProps } from './Menu.props';
import { AppContext } from '@/app/context/app.contex';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { Icon } from '@/app/assets/Icon';

import cn from 'classnames';
import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        id: TopLevelCategory.Courses,
        route: 'courses',
        name: 'Курсы',
        icon: <Icon.CoursesIcon />,
    },
    {
        id: TopLevelCategory.Services,
        route: 'services',
        name: 'Сервисы',
        icon: <Icon.ServicesIcon />,
    },
    {
        id: TopLevelCategory.Books,
        route: 'books',
        name: 'Книги',
        icon: <Icon.BooksIcon />,
    },
    {
        id: TopLevelCategory.Goods,
        route: 'goods',
        name: 'Товары',
        icon: <Icon.GoodsIcon />,
    },
]

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const pathname = usePathname();

    console.log(menu);

    const openSecondLevelMenu = (secondCategory: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = true;
            }

            return m;
        }));
    }

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((m) => (
                    <div key={m.id}>
                        <Link href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id === firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </Link>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div key={menuItem.id} className={styles.secondBlock}>
                {menu && menu.map((m) => {
                    if (m.pages.map((page) => page.alias).includes(pathname.split('/')[2])) {
                        m.isOpened = true;
                    }

                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLevel} onClick={() => openSecondLevelMenu(m._id.secondCategory)}>{m._id.secondCategory}</div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: m.isOpened
                            })}>
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map((page) => (
                <Link
                    key={page.id}
                    href={`/${route}/${page.alias}`}
                    className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${page.alias}` === pathname
                    })}
                >
                    {page.title}
                </Link>
            ))
        );
    }

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}
