import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    categories: MenuItem[];
    firstCategory: TopLevelCategory;
}