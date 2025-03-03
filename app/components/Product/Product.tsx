import { ProductProps } from './Product.props';
import cn from 'classnames';
import styles from './Product.module.css';

export const Product = ({ product, className, ...props }: ProductProps) => {
    return (
        <div className={cn(styles.product, className)} {...props}>
            Product
            {product.title}
        </div>
    )
}
