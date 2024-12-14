import React, { JSX } from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ children, appearence }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, {
                [styles.primary]: appearence === 'primary',
                [styles.ghost]: appearence === 'ghost'
            })}
        >
            {children}
        </button>
    )
}
