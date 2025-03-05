import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.css';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps) => {
    return (
        <div className={cn(styles.reviewForm, className)} {...props}>
            {productId}
        </div>
    )
}
