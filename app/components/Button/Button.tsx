'use client';

import React, { JSX } from 'react';
import Image from 'next/image'
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ children, arrowIcon = 'none', appearence, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearence === 'primary',
                [styles.ghost]: appearence === 'ghost'
            })}
            {...props}
        >
            {children}

            {arrowIcon !== 'none' && <Image className={cn(styles.arrow, {
                [styles.down]: arrowIcon === 'down'
            })} src='/arrow.svg' width={6} height={10} alt='Иконка стрелки направо' />}
        </button>
    )
}
