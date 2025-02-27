import { ProductModel } from '@/interfaces/product.interface';
import { TopLevelCategory, TopPageModel } from '@/interfaces/page.interface';

export interface TopPageComponentProps {
    page: TopPageModel;
    products: ProductModel[];
    firstCategory?: TopLevelCategory;
}