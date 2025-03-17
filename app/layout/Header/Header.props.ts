import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>  {
    firstCategory: TopLevelCategory;
    menu: MenuItem[];
}