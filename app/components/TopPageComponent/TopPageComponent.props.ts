import { MenuItem } from '@/interfaces/menu.interface';
import { TopPageModel } from '@/interfaces/page.interface';

export interface TopPageComponentProps {
    page: TopPageModel;
    products: MenuItem[];
    firstCategory?: string;
}