'use client';

import React, { JSX } from 'react';
import { ArrowIcon } from '../ArrowIcon/Button';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ children, arrow = 'none', appearence, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearence === 'primary',
                [styles.ghost]: appearence === 'ghost'
            })}
            {...props}
        >
            {children}

            {arrow !== 'none' && <ArrowIcon className={cn(styles.arrow, {
                [styles.down]: arrow === 'down'
            })} />}
        </button>
    )
}
