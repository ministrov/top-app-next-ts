import { ReactNode } from 'react';

export interface ButtonProps {
    appearence: 'primary' | 'ghost';
    children: ReactNode;
}