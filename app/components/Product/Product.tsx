'use client';

import { useState, Fragment, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '../Card/Card';
import { ProductProps } from './Product.props';
import { Review } from '../Review/Review';
import Rating from '../Rating/Rating';
import Tag from '../Tag/Tag';
import { Button } from '../Button/Button';
import { Divider } from '../Divider/Divider';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { declineNumber, transformPrice } from '@/helpers';
import cn from 'classnames';
import styles from './Product.module.css';

export const Product = motion.create(({ product, className, ref, ...props }: ProductProps) => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
        visible: { opacity: 1, height: 'auto', padding: 30 },
        hidden: { opacity: 0, height: 0, padding: 0 }
    };

    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        reviewRef.current?.focus()
    }

    return (
        <div className={className} {...props} ref={ref}>
            <Card classNames={styles.product}>
                <div className={styles.logo}>
                    {product.image ? (
                        <Image
                            src={product.image}
                            width={70}
                            height={70}
                            alt={`Logo picture ${product.title}`}
                        />
                    ) : (
                        <div className={styles.logoSkeleton}>Logo</div>
                    )}
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {transformPrice(product.price)}
                    {product.oldPrice && <Tag className={styles.oldPrice} color='green'>{transformPrice(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>{transformPrice(product.credit)}/<span className={styles.month}>мес</span>
                </div>
                <div className={styles.rating}>
                    <Rating rating={product.reviewAvg ?? product.initialRating} />
                </div>
                <div className={styles.tags}>
                    {product.categories.map(category => <Tag key={category} className={styles.category} color='ghost'>{category}</Tag>)}
                </div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>в кредит</div>
                <div className={styles.rateTitle}>
                    <a className={styles.rateAnchor} href="#ref" onClick={scrollToReview}>
                        {product.reviewCount} {declineNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                    </a>
                </div>
                <Divider className={styles.hr} />
                <div className={styles.description}>{product.description}</div>
                <div className={styles.features}>
                    {product.characteristics.map(c => (
                        <div className={styles.characteristics} key={c.name}>
                            <span className={styles.characteristicName}>{c.name}</span>
                            <span className={styles.characteristicDot}></span>
                            <span className={styles.characteristicValue}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advWrapper}>
                    {product.advantages && <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <Divider className={cn(styles.hr, styles.hr2)} />
                <div className={styles.actions}>
                    <Button
                        appearence='primary'
                    >
                        Узнать подробнее
                    </Button>
                    <Button
                        appearence='ghost'
                        arrow={isReviewOpened ? 'down' : 'right'}
                        onClick={() => setIsReviewOpened(!isReviewOpened)}
                    >
                        Читать отзывы
                    </Button>
                </div>
            </Card>

            <Card
                initial={'hidden'}
                variants={variants}
                animate={isReviewOpened ? 'visible' : 'hidden'}
                color='blue'
                classNames={cn(styles.reviews)}
                tabIndex={isReviewOpened ? 0 : -1}
                ref={reviewRef}
            >
                {product.reviews.map(r => (
                    <Fragment key={r._id}>
                        <Review
                            review={r}
                        />

                        <Divider className={''} />
                    </Fragment>
                ))}

                <ReviewForm productId={product._id} isOpened={isReviewOpened} />
            </Card>
        </div>
    )
});
