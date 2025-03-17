import { MenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> { 
    firstCategory: TopLevelCategory;
    menu: MenuItem[];
}