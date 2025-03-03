/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';
import { Card } from '../Card/Card';
import { ProductProps } from './Product.props';
// import cn from 'classnames';
import styles from './Product.module.css';
import Rating from '../Rating/Rating';
import Tag from '../Tag/Tag';

export const Product = ({ product, className }: ProductProps) => {
    console.log(className);
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
            <div className={styles.price}>{product.price}</div>
            <div className={styles.credit}>{product.credit}</div>
            <div className={styles.rating}>
                <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
                {product.categories.map(category => <Tag key={category} color='ghost'>{category}</Tag>)}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>в кредит</div>
            <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
        </Card>
    )
}
