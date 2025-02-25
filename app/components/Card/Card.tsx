'use client';

import { CardProps } from './Card.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Card = ({ color = 'white', classNames, children, ...props }: CardProps) => {
    return (
        <div className={cn(styles.card, classNames, {
            [styles.blue]: color === 'blue'
        })}
            {...props}
        >
            {children}
        </div>
    )
}
