import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchingProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    className: string;
}