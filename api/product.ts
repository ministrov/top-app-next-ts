import { API } from '@/app/api';

export const getProduct = async () => {
    try {
        const response = await fetch(API.product.find);

        console.log(response);

        return response.json();
    } catch (e) {
        console.log(e);
    }
}

