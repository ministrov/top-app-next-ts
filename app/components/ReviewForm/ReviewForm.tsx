// 'use client';

import { useForm, Controller } from 'react-hook-form';
import { ReviewFormProps } from './ReviewForm.props';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import Rating from '../Rating/Rating';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import { API } from '@/helpers/api';
import { Icon } from '@/app/assets/Icon';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import axios from 'axios';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps) => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

    // const onSubmit = async (formData: IReviewForm) => {
    //     try {
    //         const response = await fetch(API.review.createDemo, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 formData: formData,
    //                 productId: productId
    //             })
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to submit form');
    //         }

    //         const data = await response.json();

    //         console.log(data);
    //         console.log(data.message);

    //         // if (data.message) {

    //         // }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });

            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input
                    {...register('name', { required: { value: true, message: 'Заполните имя' } })}
                    placeholder='Имя'
                    error={errors.name}
                />
                <Input
                    {...register('title', { required: { value: true, message: 'Заполните заголовок отзыва' } })}
                    className={styles.title}
                    placeholder='Заголовок отзыва'
                    error={errors.title}
                />
                <div className={styles.rating}>
                    <span>Оценка:</span>

                    <Controller
                        control={control}
                        name='rating'
                        rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
                        render={({ field }) => (
                            <Rating
                                isEditable
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                                error={errors.rating}
                            />
                        )}
                    />
                </div>
                <Textarea
                    {...register('description', { required: { value: true, message: 'Заполните описание' } })}
                    className={styles.description}
                    placeholder='Текст отзыва'
                    error={errors.description}
                />
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
