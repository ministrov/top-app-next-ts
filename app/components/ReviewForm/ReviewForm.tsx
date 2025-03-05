'use client';

import { useForm, Controller } from 'react-hook-form';
import { ReviewFormProps } from './ReviewForm.props';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import Rating from '../Rating/Rating';
import { IReviewForm } from './ReviewForm.interface';
import { Icon } from '@/app/assets/Icon';
import cn from 'classnames';
import styles from './ReviewForm.module.css';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps) => {
    const { register, control, handleSubmit } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => { console.log(data) };

    console.dir(register, control);

    console.log(productId);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input {...register('name')} placeholder='Имя' />
                <Input {...register('title')} className={styles.title} placeholder='Заголовок отзыва' />
                <div className={styles.rating}>
                    <span>Оценка:</span>

                    <Controller
                        control={control}
                        name='rating'
                        render={({ field }) => (
                            <Rating isEditable rating={field.value} setRating={field.onChange} />
                        )}
                    />
                </div>
                <Textarea {...register('description')} className={styles.description} placeholder='Текст отзыва' />
                <div className={styles.submit}>
                    <Button className={styles.btn} appearence={'primary'}>
                        Отправить
                    </Button>
                    <p className={styles.checking}><sup>*</sup> Перед публикацией отзыв пройдет предварительную модерацию и проверку</p>
                </div>
            </div>

            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>
                    Спасибо, Ваш отзыв будет опубликован после проверки
                </div>
                <div className={styles.closeBox}>
                    <Icon.CloseIcon className={styles.close} />
                </div>
            </div>
        </form>
    )
}
