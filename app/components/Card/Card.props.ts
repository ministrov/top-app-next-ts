import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: 'white' | 'blue';
    classNames: string;
    children: ReactNode;
}