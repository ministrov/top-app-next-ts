/* eslint-disable jsx-a11y/role-supports-aria-props */

'use client';

import { SortEnum, SortingProps } from './Sorting.props';
import { Icon } from '@/app/assets/Icon';
import cn from 'classnames';
import styles from './Sorting.module.css';

export const Sorting = ({ sort, setSort, className, ...props }: SortingProps) => {
    return (
        <div className={cn(styles.sorting, className)} {...props}>
            <div className={styles.sortName} id="sort">Сортировка</div>
            <button
                id="rating"
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort === SortEnum.Rating
                })}
                aria-selected={sort === SortEnum.Rating}
                aria-labelledby="sort rating"
            >
                <span className={styles.iconWrap}>
                    <Icon.SortingIcon />
                </span> По рейтингу
            </button>

            <button
                id="price"
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort === SortEnum.Price
                })}
                aria-selected={sort === SortEnum.Price}
                aria-labelledby="sort price"
            >
                <span className={styles.iconWrap}>
                    <Icon.SortingIcon />
                </span> По цене
            </button>
        </div>
    )
}
