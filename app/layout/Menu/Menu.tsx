import { JSX } from 'react';
import { getMenu } from '@/api/menu';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import CoursesIcon from './CoursesIcon/CoursesIcon';
import ServicesIcon from './ServicesIcon/ServicesIcon';
import BooksIcon from './BooksIcon/BooksIcon';
import GoodsIcon from './GoodsIcon/GoodsIcon';

import cn from 'classnames';
import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'goods', name: 'Товары', icon: <GoodsIcon />, id: TopLevelCategory.Goods },
]

const firstCategory = TopLevelCategory.Courses;

const menu = await getMenu(firstCategory);

export const Menu = (): JSX.Element => {
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firtsLevelActive]: m.id === firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </a>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        console.log(menuItem);
        return (
            <div>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLeveBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => (
                <a key={page.id} href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: true
                })}>
                    {page.title}
                </a>
            ))
        );
    }

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}
