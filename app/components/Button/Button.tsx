'use client';

import React, { JSX } from 'react';
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { ButtonProps } from './Button.props';
import { Icon } from '@/app/assets/Icon';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ children, arrow = 'none', appearence, className, ...props }: ButtonProps): JSX.Element => {
    const scale = useMotionValue(1);

    useMotionValueEvent(scale, 'change', (latest) => {
        console.log(latest);
    });

    return (
        <motion.button
            whileHover={{ scale: 1.06 }}
            className={cn(styles.button, className, {
                [styles.primary]: appearence === 'primary',
                [styles.ghost]: appearence === 'ghost'
            })}
            style={{ scale }}
            {...props}
        >
            {children}

            {arrow !== 'none' && <Icon.ArrowIcon className={cn(styles.arrow, {
                [styles.down]: arrow === 'down'
            })} />}
        </motion.button>
    )
}
