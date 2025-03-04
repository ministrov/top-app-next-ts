/* eslint-disable @next/next/no-img-element */
import { Card } from '../Card/Card';
import { ProductProps } from './Product.props';
// import cn from 'classnames';
import styles from './Product.module.css';
import Rating from '../Rating/Rating';
import Tag from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declineNumber, transformPrice } from '@/helpers';
import { Divider } from '../Divider/Divider';

export const Product = ({ product }: ProductProps) => {
    return (
        <Card classNames={styles.product}>
            <div className={styles.logo}>
                {product.image ? (
                    <img src={product.image} width={70} height={70} alt={`Logo picture ${product.title}`} />
                ) : (
                    <div>Logo</div>
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
            <div className={styles.rateTitle}>{product.reviewCount} {declineNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.features}>features</div>
            <div className={styles.advWrapper}>
                <div className={styles.advantages}>
                    <div className={styles.advTitle}>Преимущества</div>
                    <div>{product.advantages || 'Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала'}</div>
                </div>
                <div className={styles.disadvantages}>
                    <div className={styles.advTitle}>Недостатки</div>
                    <div>{product.advantages || 'Некоторое темы раскрыты не до конца'}</div>
                </div>
            </div>
            <Divider className={styles.hr} />
            <div className={styles.actions}>
                <Button appearence='primary'>Узнать подробнее</Button>
                <Button appearence='ghost' arrow={'right'}>Читать отзывы</Button>
            </div>
        </Card>
    )
}
