import { SortingProps } from './Sorting.props';
import { Icon } from '@/app/assets/Icon';
import cn from 'classnames';
import styles from './Sorting.module.css';

export const Sorting = ({ sort, setSort, className, ...props }: SortingProps) => {
    if (sort) {
        setSort(sort);
    }
    return (
        <div className={cn(styles.sorting, className)} {...props}>
            <span className={styles.iconBox}>{<Icon.SortingIcon />}</span>
            Sorting
        </div>
    )
}
