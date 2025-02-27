import { ProductModel } from '@/interfaces/product.interface';
import { SortEnum } from '../Sorting/Sorting.props';

export type SortActions = { type: SortEnum } | { type: SortEnum.Rating };

export interface SortReducerState {
    sort: SortEnum;
    products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortActions) => {
    switch (action.type) {
        
    }
}