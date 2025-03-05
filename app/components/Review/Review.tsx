import cn from 'classnames';
import styles from './Review.module.css';
import { ReviewProps } from './Review.props';

export const Review = ({ review, className, ...props }: ReviewProps) => {
    return (
        <div className={cn(styles.review, className)} {...props}>
            {review.description}
        </div>
    )
}
