'use client';

import { ButtonIconProps } from './Button.props';
import { Icon } from '@/app/assets/Icon';
import cn from 'classnames';
import styles from './ButtonIcon.module.css';

export const ButtonIcon = ({ appearence, icon, className, ...props }: ButtonIconProps) => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearence === 'primary',
                [styles.white]: appearence === 'white'
            })}
            {...props}
        >
            {icon && <Icon.MenuClose />}
        </button>
    )
}
