import { JSX } from 'react';
import Link from 'next/link';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { MenuProps } from './Menu.props';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { firstLevelMenu } from '@/mocks';

import cn from 'classnames';
import styles from './Menu.module.css';

export const Menu = ({ categories }: MenuProps): JSX.Element => {
    const uniqueId = crypto.randomUUID();

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id === TopLevelCategory.Courses
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </Link>
                        {m.id === TopLevelCategory.Courses && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondLevelBlock}>
                {categories.map(category => (
                    <div key={uniqueId + `1${Math.random() * 10}`}>
                        <div className={styles.secondLevel}>{category._id.secondCategory}</div>
                        <div className={cn(styles.secondLeveBlock, {
                            [styles.secondLevelBlockOpened]: category.isOpened
                        })}>
                            {buildThirdLevel(category.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => (
                <Link
                    key={page.id}
                    href={`/${route}/${page.alias}`}
                    className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: false
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
