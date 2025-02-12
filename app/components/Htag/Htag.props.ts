import { ReactNode, DetailedHTMLProps, HTMLElementType, HTMLAttributes } from 'react';

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLElementType>, HTMLElementType> {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode; 
}