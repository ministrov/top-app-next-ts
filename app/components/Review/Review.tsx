import { Icon } from '@/app/assets/Icon';
import { ReviewProps } from './Review.props';
import cn from 'classnames';
import styles from './Review.module.css';
import Rating from '../Rating/Rating';

export const Review = ({ review, className, ...props }: ReviewProps) => {
    const { name, title, description, rating } = review;
    return (
        <div className={cn(styles.review, className)} {...props}>
            <div className={styles.iconBox}>
                <Icon.UserIcon />
            </div>

            <div className={styles.user}>
                <span className={styles.name}>{name}:</span>
                <span>{title}</span>
            </div>

            <div className={styles.date}>
                <span className={styles.createAt}>{'12-04-2023'}</span>
            </div>

            <div className={styles.rating}>
                <Rating rating={rating} />
            </div>

            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}
