import { API } from '@/helpers/api';
import { TopPageModel } from '@/interfaces/page.interface';

export const getProduct = async (page: TopPageModel) => {
    try {
        const response = await fetch(API.product.find, {
            method: 'POST',
            body: JSON.stringify({
                category: page.category,
                limit: 10
            }),
            headers: new Headers({ 'content-type': 'application/json' })
        });

        return await response.json();
    } catch (e) {
        console.log(e);
    }
}

