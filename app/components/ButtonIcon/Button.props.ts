import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { IconType } from '@/app/assets/Icon';

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearence: 'primary' | 'white';
    icon: IconType;
}