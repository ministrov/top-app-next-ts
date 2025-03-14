'use client';

import { motion } from 'framer-motion';
import { CardProps } from './Card.props';
import cn from 'classnames';
import styles from './Card.module.css';

export const Card = motion.create(({ color = 'white', classNames, children, ref, ...props }: CardProps) => {
    return (
        <div className={cn(styles.card, classNames, {
            [styles.blue]: color === 'blue'
        })}
            ref={ref}
            {...props}
        >
            {children}
        </div>
    )
})
