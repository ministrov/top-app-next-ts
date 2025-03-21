'use client';

import { useState } from 'react';
import axios from 'axios';
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

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps) => {
    const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string | null>(null);

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setErrorText('Что-то пошло нек так!!!');
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            setErrorText('e');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input
                    {...register('name', { required: { value: true, message: 'Заполните имя' } })}
                    placeholder='Имя'
                    error={errors.name}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invalid={errors.name ? true : false}
                />
                <Input
                    {...register('title', { required: { value: true, message: 'Заполните заголовок отзыва' } })}
                    className={styles.title}
                    placeholder='Заголовок отзыва'
                    error={errors.title}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invalid={errors.title ? true : false}
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
                                tabIndex={isOpened ? 0 : -1}
                            />
                        )}
                    />
                </div>
                <Textarea
                    {...register('description', { required: { value: true, message: 'Заполните описание' } })}
                    className={styles.description}
                    placeholder='Текст отзыва'
                    error={errors.description}
                    tabIndex={isOpened ? 0 : -1}
                    aria-label='Текст отзыва'
                    aria-invalid={errors.description ? true : false}
                />
                <div className={styles.submit}>
                    <Button
                        className={styles.btn}
                        onClick={() => clearErrors()}
                        appearence={'primary'}
                        tabIndex={isOpened ? 0 : -1}
                    >
                        Отправить
                    </Button>
                    <p className={styles.checking}><sup>*</sup> Перед публикацией отзыв пройдет предварительную модерацию и проверку</p>
                </div>
            </div>

            {isSuccess && <div className={cn(styles.success, styles.panel)} role="alert">
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>
                    Спасибо, Ваш отзыв будет опубликован после проверки
                </div>
                <button
                    className={styles.close}
                    onClick={() => setIsSuccess(false)}
                    aria-label='Закрыть оповещение'
                >
                    <Icon.CloseIcon className={styles.closeIcon} />
                </button>
            </div>}

            {errorText && <div className={cn(styles.errorBox, styles.panel)} role="alert">
                Что-то пошло не так, попробуйте обновить страницу.
                <button
                    className={styles.close}
                    onClick={() => setErrorText(null)}
                    aria-label='Закрыть оповещение'
                >
                    <Icon.CloseIcon className={styles.closeIcon} />
                </button>
            </div>}
        </form>
    )
}
