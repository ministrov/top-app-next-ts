import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { Input } from '../Input/Input';
import Rating from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps) => {
    return (
        <div className={cn(styles.reviewForm, className)} {...props}>
            <Input placeholder='Имя' />
            <Input className={styles.title} placeholder='Заголовок отзыва' />
            <div className={styles.rating}>
                <span>Оценка:</span>

                <Rating rating={4} />
            </div>
            <Textarea className={styles.description} placeholder='Текст отзыва' />
            <div className={styles.submit}>
                <Button className={styles.btn} appearence={'primary'}>
                    Отправить
                </Button>
                <p>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</p>
            </div>
        </div>
    )
}
