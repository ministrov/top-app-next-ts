'use client';

import { ButtonIconProps } from './ButtonIcon.props';
import { Icon } from '@/app/assets/Icon';
import cn from 'classnames';
import styles from './ButtonIcon.module.css';

export const ButtonIcon = ({ appearence, icon, className, ...props }: ButtonIconProps) => {
    const IconComp = Icon[icon];
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearence === 'primary',
                [styles.white]: appearence === 'white'
            })}
            {...props}
        >
            <IconComp />
        </button>
    )
}
