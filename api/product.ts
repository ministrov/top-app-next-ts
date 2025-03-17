import { API } from '@/helpers/api';
import { TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';
import axios from 'axios';

// export const getProduct = async (page: TopPageModel) => {
//     try {
//         const response = await fetch(API.product.find, {
//             method: 'POST',
//             body: JSON.stringify({
//                 category: page.category,
//                 limit: 10
//             }),
//             headers: new Headers({ 'content-type': 'application/json' })
//         });

//         return await response.json();
//     } catch (e) {
//         console.log(e);
//     }
// }

export async function getCourses(page: TopPageModel) {
	try {
        const { data } = await axios.post<ProductModel[]>(API.product.find, {
            category: page.category,
            limit: 20
	    });
	    return data;
    } catch (e) {
        console.log(e);
    }
}

