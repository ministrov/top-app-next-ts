import { API } from '@/helpers/api';
import { TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';
import axios from 'axios';

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

