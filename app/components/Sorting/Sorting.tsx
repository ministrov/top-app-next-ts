'use client';

import { SortEnum, SortingProps } from './Sorting.props';
import { Icon } from '@/app/assets/Icon';
import cn from 'classnames';
import styles from './Sorting.module.css';

export const Sorting = ({ sort, setSort, className, ...props }: SortingProps) => {
    return (
        <div className={cn(styles.sorting, className)} {...props}>
            <button
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort === SortEnum.Rating
                })}
            >
                <span className={styles.iconWrap}>
                    <Icon.SortingIcon />
                </span> По рейтингу
            </button>

            <button
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort === SortEnum.Price
                })}
            >
                <span className={styles.iconWrap}>
                    <Icon.SortingIcon />
                </span> По цене
            </button>
        </div>
    )
}
