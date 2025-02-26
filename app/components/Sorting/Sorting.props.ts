import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SortingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum;
}

export enum SortEnum {
    Rating,
    Price
}