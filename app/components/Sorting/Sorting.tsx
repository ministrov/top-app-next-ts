'use client';

import { SortEnum, SortingProps } from './Sorting.props';
import { Icon } from '@/app/assets/Icon';
import cn from 'classnames';
import styles from './Sorting.module.css';

export const Sorting = ({ sort, setSort, className, ...props }: SortingProps) => {
    if (sort) {
        setSort(sort);
    }
    return (
        <div className={cn(styles.sorting, className)} {...props}>
            <span
                onClick={() => setSort(SortEnum.Rating)}
                className={styles.iconBox}
            >
                <span className={styles.iconWrap}>
                    <Icon.SortingIcon />
                </span> По рейтингу
            </span>

            <span
                onClick={() => setSort(SortEnum.Price)}
                className={styles.iconBox}
            >
                <span className={styles.iconWrap}>
                    <Icon.SortingIcon />
                </span> По цене
            </span>
        </div>
    )
}
